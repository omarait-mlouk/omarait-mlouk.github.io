const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Canvas colors come from CSS variables so they follow the theme
let CYAN, VIOLET, INK, BG, FIELD;
const redrawers = [];

function readPalette() {
    const css = getComputedStyle(document.documentElement);
    const rgb = name => css.getPropertyValue(name).split(',').map(Number);
    CYAN = rgb('--cyan-rgb');
    VIOLET = rgb('--violet-rgb');
    INK = rgb('--ink-rgb');
    BG = rgb('--bg-rgb');
    FIELD = parseFloat(css.getPropertyValue('--field-strength')) || 1;
}
readPalette();

const $ = (sel, root = document) => root.querySelector(sel);
const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const pad2 = n => String(n).padStart(2, '0');

/* ==========================================================================
   Render content from data.js
   ========================================================================== */

function renderContent() {
    const featured = projects.filter(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    $('#featured').innerHTML = featured.map((p, i) => `
        <article class="card reveal">
            <div class="card-visual">
                <canvas data-pattern="${p.pattern}" aria-hidden="true"></canvas>
                <span class="card-index">${pad2(i + 1)} / ${pad2(featured.length)}</span>
            </div>
            <div class="card-body">
                <div class="card-meta"><span>${p.tags[0]}</span><span>${p.year}</span></div>
                <h3>${p.title}</h3>
                <p class="card-subtitle">${p.subtitle}</p>
                <p>${p.description}</p>
                <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
                <div class="card-links">
                    ${p.links.map(l => `<a class="arrow-link" href="${l.url}" target="_blank" rel="noopener">${l.label} <span>↗</span></a>`).join('')}
                </div>
            </div>
        </article>
    `).join('');

    $('#more').innerHTML = rest.map(p => `
        <li class="reveal">
            <a href="${p.links[0].url}" target="_blank" rel="noopener">
                <span class="more-year">${p.year}</span>
                <span class="more-title">${p.title}</span>
                <span class="more-desc">${p.description}</span>
                <span class="more-arrow" aria-hidden="true">↗</span>
            </a>
        </li>
    `).join('');

    $('#articles').innerHTML = articles.map((a, i) => `
        <li class="reveal">
            <a class="article" href="${a.url}" target="_blank" rel="noopener">
                <span class="article-num">${pad2(i + 1)}</span>
                <div>
                    <h3>${a.title}</h3>
                    <p>${a.excerpt}</p>
                </div>
                <span class="article-meta">${a.date} · ${a.readTime}</span>
            </a>
        </li>
    `).join('');

    const timeline = items => items.map(e => `
        <li>
            <div class="tl-when">${e.when}</div>
            <div class="tl-role">${e.role}</div>
            <div class="tl-where">${e.where}</div>
        </li>
    `).join('');
    $('#experience').innerHTML = timeline(experience);
    $('#education').innerHTML = timeline(education);

    // Doubled so the marquee loops seamlessly at -50%
    const chips = stack.map(s => `<span>${s}</span>`).join('');
    $('#stack').innerHTML = chips + chips;

    $('#socials').innerHTML = site.links
        .map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`)
        .join('');

    $('#mailBtn').href = `mailto:${site.email}`;
    $('#copyBtn').addEventListener('click', async e => {
        const btn = e.currentTarget;
        try {
            await navigator.clipboard.writeText(site.email);
            btn.textContent = 'Copied ✓';
        } catch {
            btn.textContent = site.email;
        }
        setTimeout(() => { btn.textContent = 'Copy address'; }, 2200);
    });
}

/* ==========================================================================
   Canvas helper: sizes to its box, runs only while visible
   ========================================================================== */

function animatedCanvas(canvas, { setup, frame }) {
    const ctx = canvas.getContext('2d');
    const state = { w: 0, h: 0, t: 0, ctx };
    let visible = false;
    let raf = null;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        state.w = rect.width;
        state.h = rect.height;
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        setup && setup(state);
        if (reducedMotion || !visible) frame(state);
    }

    function loop(now) {
        state.t = now / 1000;
        frame(state);
        raf = requestAnimationFrame(loop);
    }

    function start() {
        if (raf || reducedMotion || document.hidden) return;
        raf = requestAnimationFrame(loop);
    }

    function stop() {
        cancelAnimationFrame(raf);
        raf = null;
    }

    redrawers.push(() => { if (!raf) frame(state); });
    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visible ? start() : stop();
    }).observe(canvas);
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stop() : visible && start();
    });

    return state;
}

/* ==========================================================================
   Hero: neural field
   ========================================================================== */

function neuralField() {
    const canvas = $('#field');
    const pointer = { x: -9999, y: -9999, active: false };
    let nodes = [];
    let pulses = [];
    let lastPulse = 0;

    const LINK = 150;

    function setup({ w, h }) {
        const count = Math.min(130, Math.round((w * h) / 12000));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.4 + 0.6,
            hue: Math.random()
        }));
        pulses = [];
    }

    function spawnPulse() {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        let best = null;
        let bestD = LINK;
        for (const b of nodes) {
            if (b === a) continue;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < bestD) { bestD = d; best = b; }
        }
        if (best) pulses.push({ a, b: best, p: 0 });
    }

    function frame(s) {
        const { ctx, w, h, t } = s;
        ctx.clearRect(0, 0, w, h);

        for (const n of nodes) {
            if (pointer.active) {
                const dx = pointer.x - n.x;
                const dy = pointer.y - n.y;
                const d = Math.hypot(dx, dy);
                if (d < 200 && d > 1) {
                    n.vx += (dx / d) * 0.012;
                    n.vy += (dy / d) * 0.012;
                }
            }
            n.vx *= 0.985;
            n.vy *= 0.985;
            // Keep a gentle minimum drift so the field never freezes
            n.vx += (Math.random() - 0.5) * 0.01;
            n.vy += (Math.random() - 0.5) * 0.01;
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
            if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
        }

        // Edges
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d > LINK) continue;
                let alpha = (1 - d / LINK) * 0.22 * FIELD;
                if (pointer.active) {
                    const pd = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y);
                    if (pd < 200) alpha += (1 - pd / 200) * 0.35;
                }
                ctx.strokeStyle = rgba(mix(CYAN, VIOLET, (a.hue + b.hue) / 2), alpha);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }

        // Signals travelling along edges
        if (t - lastPulse > 0.18 && nodes.length) {
            spawnPulse();
            lastPulse = t;
        }
        pulses = pulses.filter(p => (p.p += 0.018) < 1);
        for (const p of pulses) {
            const x = p.a.x + (p.b.x - p.a.x) * p.p;
            const y = p.a.y + (p.b.y - p.a.y) * p.p;
            const g = ctx.createRadialGradient(x, y, 0, x, y, 8);
            g.addColorStop(0, rgba(CYAN, 0.9));
            g.addColorStop(1, rgba(CYAN, 0));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
        }

        // Nodes
        for (const n of nodes) {
            let glow = Math.min(1, 0.55 * FIELD);
            if (pointer.active) {
                const d = Math.hypot(n.x - pointer.x, n.y - pointer.y);
                if (d < 200) glow += (1 - d / 200) * 0.45;
            }
            ctx.fillStyle = rgba(mix(CYAN, VIOLET, n.hue), glow);
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const hero = $('.hero');
    hero.addEventListener('pointermove', e => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;
    });
    hero.addEventListener('pointerleave', () => { pointer.active = false; });

    animatedCanvas(canvas, { setup, frame });
}

/* ==========================================================================
   Project visuals: one small generative scene per featured project
   ========================================================================== */

const patterns = {
    // AtlasRetail: warehouse bars with a forecast line extending past "today"
    grid: {
        setup(s) {
            s.bars = Array.from({ length: 18 }, (_, i) => 0.35 + 0.25 * Math.sin(i * 0.7) + Math.random() * 0.2);
        },
        frame({ ctx, w, h, t, bars }) {
            ctx.clearRect(0, 0, w, h);
            const padX = w * 0.1;
            const base = h * 0.78;
            const span = h * 0.5;
            const n = bars.length;
            const gap = (w - padX * 2) / n;
            const split = Math.floor(n * 0.66);

            ctx.strokeStyle = rgba(INK, 0.05);
            for (let i = 0; i <= 4; i++) {
                const y = base - (span * i) / 4;
                ctx.beginPath();
                ctx.moveTo(padX, y);
                ctx.lineTo(w - padX, y);
                ctx.stroke();
            }

            const points = [];
            bars.forEach((v, i) => {
                const val = v + Math.sin(t * 1.2 + i * 0.6) * 0.06;
                const x = padX + i * gap + gap * 0.2;
                const bh = val * span;
                const forecast = i >= split;
                ctx.fillStyle = forecast ? rgba(VIOLET, 0.12) : rgba(mix(CYAN, VIOLET, i / n), 0.55);
                ctx.fillRect(x, base - bh, gap * 0.6, bh);
                if (forecast) {
                    ctx.strokeStyle = rgba(VIOLET, 0.45);
                    ctx.setLineDash([3, 3]);
                    ctx.strokeRect(x + 0.5, base - bh + 0.5, gap * 0.6 - 1, bh - 1);
                    ctx.setLineDash([]);
                }
                points.push([x + gap * 0.3, base - bh - 10]);
            });

            ctx.strokeStyle = rgba(CYAN, 0.9);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            points.forEach(([x, y], i) => {
                if (i === split) {
                    ctx.stroke();
                    ctx.strokeStyle = rgba(VIOLET, 0.9);
                    ctx.setLineDash([5, 5]);
                    ctx.beginPath();
                    ctx.moveTo(...points[i - 1]);
                }
                i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
            });
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineWidth = 1;

            const todayX = points[split][0] - gap / 2;
            ctx.fillStyle = rgba(INK, 0.35);
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillText('forecast →', todayX + 6, base - span - 8);
            ctx.strokeStyle = rgba(INK, 0.15);
            ctx.beginPath();
            ctx.moveTo(todayX, base - span - 20);
            ctx.lineTo(todayX, base);
            ctx.stroke();
        }
    },

    // DeblurGAN: the same scene, motion-blurred on the left, restored on the right
    blur: {
        setup(s) {
            s.shapes = [
                { x: 0.3, y: 0.42, r: 0.16, c: () => CYAN },
                { x: 0.62, y: 0.58, r: 0.2, c: () => VIOLET },
                { x: 0.78, y: 0.32, r: 0.08, c: () => INK }
            ];
        },
        frame({ ctx, w, h, t, shapes }) {
            ctx.clearRect(0, 0, w, h);
            const split = w * (0.5 + Math.sin(t * 0.6) * 0.28);
            const m = Math.min(w, h);

            const draw = (blurred) => {
                // Motion blur approximated by stacking faint horizontal copies
                const copies = blurred ? 14 : 1;
                const spread = blurred ? m * 0.12 : 0;
                for (const s of shapes) {
                    for (let k = 0; k < copies; k++) {
                        const off = copies > 1 ? (k / (copies - 1) - 0.5) * spread : 0;
                        ctx.fillStyle = rgba(s.c(), blurred ? 0.09 : 0.85);
                        ctx.beginPath();
                        ctx.arc(s.x * w + off, s.y * h, s.r * m, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    if (!blurred) {
                        ctx.strokeStyle = rgba(BG, 0.6);
                        ctx.lineWidth = 2;
                        for (let r = s.r * m * 0.3; r < s.r * m; r += s.r * m * 0.25) {
                            ctx.beginPath();
                            ctx.arc(s.x * w, s.y * h, r, 0, Math.PI * 2);
                            ctx.stroke();
                        }
                        ctx.lineWidth = 1;
                    }
                }
            };

            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, split, h);
            ctx.clip();
            draw(true);
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.rect(split, 0, w - split, h);
            ctx.clip();
            draw(false);
            ctx.restore();

            ctx.fillStyle = rgba(INK, 0.85);
            ctx.fillRect(split - 0.5, 0, 1, h);
            ctx.beginPath();
            ctx.arc(split, h / 2, 12, 0, Math.PI * 2);
            ctx.fillStyle = rgba(BG, 1);
            ctx.fill();
            ctx.strokeStyle = rgba(INK, 0.85);
            ctx.stroke();
            ctx.fillStyle = rgba(INK, 0.85);
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillText('‹ ›', split, h / 2 + 3);
            ctx.textAlign = 'left';
            ctx.fillStyle = rgba(INK, 0.4);
            ctx.fillText('input', 16, h - 16);
            ctx.textAlign = 'right';
            ctx.fillText('restored', w - 16, h - 16);
            ctx.textAlign = 'left';
        }
    },

    // Tifinagh: glyphs scanned into a dot matrix, with a classifier readout
    glyph: {
        setup(s) {
            const N = 20;
            const off = document.createElement('canvas');
            off.width = off.height = N;
            const o = off.getContext('2d');
            const strokes = [
                // ⵜ yat
                c => { c.moveTo(10, 3); c.lineTo(10, 17); c.moveTo(3, 10); c.lineTo(17, 10); },
                // ⴰ ya
                c => { c.arc(10, 10, 6.5, 0, Math.PI * 2); },
                // ⵣ yaz
                c => {
                    c.moveTo(10, 2); c.lineTo(10, 18);
                    c.moveTo(4, 3); c.quadraticCurveTo(9, 10, 4, 17);
                    c.moveTo(16, 3); c.quadraticCurveTo(11, 10, 16, 17);
                },
                // ⵙ yas
                c => { c.arc(10, 10, 6.5, 0, Math.PI * 2); c.moveTo(11.5, 10); c.arc(10, 10, 1.5, 0, Math.PI * 2); },
                // ⵅ-like cross form
                c => { c.moveTo(4, 4); c.lineTo(16, 16); c.moveTo(16, 4); c.lineTo(4, 16); }
            ];
            s.glyphs = strokes.map(fn => {
                o.clearRect(0, 0, N, N);
                o.strokeStyle = '#fff';
                o.lineWidth = 2.2;
                o.lineCap = 'round';
                o.beginPath();
                fn(o);
                o.stroke();
                const px = o.getImageData(0, 0, N, N).data;
                return Array.from({ length: N * N }, (_, i) => px[i * 4 + 3] / 255);
            });
            s.N = N;
            s.conf = [0.97, 0.99, 0.94, 0.96, 0.92];
        },
        frame({ ctx, w, h, t, glyphs, N, conf }) {
            ctx.clearRect(0, 0, w, h);
            const period = 2.6;
            const gi = Math.floor(t / period) % glyphs.length;
            const local = (t % period) / period;
            const g = glyphs[gi];

            const size = Math.min(w * 0.55, h * 0.72);
            const cell = size / N;
            const ox = w * 0.1 + (w * 0.55 - size) / 2;
            const oy = (h - size) / 2;
            const scanRow = Math.min(N, local * 1.6 * N);

            for (let y = 0; y < N; y++) {
                for (let x = 0; x < N; x++) {
                    const v = g[y * N + x];
                    const lit = y < scanRow ? v : 0;
                    const r = cell * (0.12 + lit * 0.28);
                    ctx.fillStyle = lit > 0.1
                        ? rgba(mix(CYAN, VIOLET, y / N), 0.35 + lit * 0.65)
                        : rgba(INK, 0.07);
                    ctx.beginPath();
                    ctx.arc(ox + x * cell + cell / 2, oy + y * cell + cell / 2, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            if (scanRow < N) {
                const sy = oy + scanRow * cell;
                ctx.fillStyle = rgba(CYAN, 0.5);
                ctx.fillRect(ox - 6, sy, size + 12, 1);
            }

            // Classifier readout
            const rx = w * 0.7;
            const done = local > 0.65;
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillStyle = rgba(INK, 0.4);
            ctx.fillText('LeNet-5', rx, oy + 10);
            for (let k = 0; k < glyphs.length; k++) {
                const y = oy + 34 + k * 22;
                const target = done ? (k === gi ? conf[gi] : 0.02 + 0.02 * k) : 0.2;
                const bw = (w * 0.2) * target;
                ctx.fillStyle = rgba(INK, 0.06);
                ctx.fillRect(rx, y, w * 0.2, 6);
                ctx.fillStyle = k === gi && done ? rgba(CYAN, 0.9) : rgba(INK, 0.18);
                ctx.fillRect(rx, y, bw, 6);
            }
            if (done) {
                ctx.fillStyle = rgba(CYAN, 0.9);
                ctx.fillText(`class ${pad2(gi)} · ${conf[gi].toFixed(2)}`, rx, oy + 34 + glyphs.length * 22 + 8);
            }
        }
    }
};

function projectVisuals() {
    document.querySelectorAll('.card-visual canvas').forEach(canvas => {
        const pattern = patterns[canvas.dataset.pattern];
        if (pattern) animatedCanvas(canvas, pattern);
    });

    // Cursor spotlight on cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    });
}

/* ==========================================================================
   Scroll: reveals, nav state, timeline drawing
   ========================================================================== */

function scrollEffects() {
    // Hero items have their own timed entrance below
    const reveals = [...document.querySelectorAll('.reveal')].filter(el => !el.closest('.hero'));
    if (reducedMotion) {
        reveals.forEach(el => el.classList.add('in'));
    } else {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                // Stagger siblings that enter together
                const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
                el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 6) * 0.08}s`);
                el.classList.add('in');
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => io.observe(el));
    }

    const nav = $('#nav');
    const navLinks = [...document.querySelectorAll('.nav-links a')];
    const timelines = [...document.querySelectorAll('.timeline')];

    function onScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 40);

        const vh = window.innerHeight;
        timelines.forEach(tl => {
            const rect = tl.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, (vh * 0.8 - rect.top) / rect.height));
            tl.style.setProperty('--progress', reducedMotion ? 1 : progress);
            tl.querySelectorAll('li').forEach(li => {
                li.classList.toggle('in', li.getBoundingClientRect().top < vh * 0.8);
            });
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const sectionIO = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach(s => sectionIO.observe(s));

    // Fade hero items in once the title has risen
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal').forEach((el, i) => {
            el.style.setProperty('--d', `${i * 0.12}s`);
            el.classList.add('in');
        });
    }, reducedMotion ? 0 : 350);
}

/* ==========================================================================
   Theme toggle (initial theme is set inline in <head> to avoid a flash)
   ========================================================================== */

function themeToggle() {
    const root = document.documentElement;
    const meta = $('meta[name="theme-color"]');
    const sync = () => {
        readPalette();
        meta.content = getComputedStyle(root).getPropertyValue('--bg').trim();
        redrawers.forEach(fn => fn());
    };

    $('#themeBtn').addEventListener('click', () => {
        const next = root.dataset.theme === 'light' ? 'dark' : 'light';
        root.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch {}
        sync();
    });

    // Follow the system setting until the visitor picks a theme
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        let saved = null;
        try { saved = localStorage.getItem('theme'); } catch {}
        if (saved) return;
        root.dataset.theme = e.matches ? 'light' : 'dark';
        sync();
    });

    sync();
}

renderContent();
themeToggle();
neuralField();
projectVisuals();
scrollEffects();
