// Theme Management
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Single Page Navigation System
const navItems = document.querySelectorAll('[data-section]');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsPageSection = document.getElementById('projects-page');
const blogPageSection = document.getElementById('blog-page');
const notesPageSection = document.getElementById('notes-page');
const footer = document.querySelector('.footer');

// Handle navigation clicks
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        
        // Hide all sections first
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'none';
        notesPageSection.style.display = 'none';
        footer.style.display = 'none';
        
        // Update active state
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        if (section === 'about') {
            // Show About page
            aboutSection.style.display = 'block';
        } else if (section === 'projects') {
            // Show Projects page
            projectsPageSection.style.display = 'block';
        } else if (section === 'blog') {
            // Show Blog page
            blogPageSection.style.display = 'block';
        } else if (section === 'notes') {
            // Show Notes page
            notesPageSection.style.display = 'block';
        } else if (section === 'home') {
            // Show Home page
            homeSection.style.display = 'block';
            footer.style.display = 'block';
        }
        
        window.scrollTo(0, 0);
    });
});

// Handle View All Projects links
/*const projectsSection = document.getElementById('projects');
if (projectsSection) {
    // Add a "View All Projects" button to the projects section
    const viewAllButton = document.createElement('div');
    viewAllButton.className = 'view-all-projects';
    // viewAllButton.innerHTML = '<a href="#" class="btn btn-primary view-all-btn">View All Projects →</a>';
    projectsSection.appendChild(viewAllButton);
    
    const viewAllBtn = viewAllButton.querySelector('.view-all-btn');
    viewAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'block';
        footer.style.display = 'none';
        window.scrollTo(0, 0);
        
        navItems.forEach(nav => nav.classList.remove('active'));
        const projectsNavItem = document.querySelector('.nav-item[data-section="projects"]');
        if (projectsNavItem) {
            projectsNavItem.classList.add('active');
        }
    });
}
*/
// Handle Quick Preview links
const quickPreviewLink = document.querySelector('.quick-preview-link');
if (quickPreviewLink) {
    quickPreviewLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Go back to home and scroll to projects section
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'none';
        notesPageSection.style.display = 'none';
        footer.style.display = 'block';
        
        // Scroll to projects section
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
        
        // Update navigation
        navItems.forEach(nav => nav.classList.remove('active'));
    });
}

// Handle Blog quick preview link
const quickPreviewBlog = document.querySelector('.quick-preview-link-blog');
if (quickPreviewBlog) {
    quickPreviewBlog.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'none';
        notesPageSection.style.display = 'none';
        footer.style.display = 'block';
        
        setTimeout(() => {
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
        
        navItems.forEach(nav => nav.classList.remove('active'));
    });
}

// Handle Notes quick preview link
const quickPreviewNotes = document.querySelector('.quick-preview-link-notes');
if (quickPreviewNotes) {
    quickPreviewNotes.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'none';
        notesPageSection.style.display = 'none';
        footer.style.display = 'block';
        
        setTimeout(() => {
            const notesSection = document.getElementById('notes');
            if (notesSection) {
                notesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
        
        navItems.forEach(nav => nav.classList.remove('active'));
    });
}

// Add "View All" buttons for Blog and Notes sections
/*const blogSection = document.getElementById('blog');
if (blogSection) {
    const viewAllBlog = document.createElement('div');
    viewAllBlog.className = 'view-all-projects';
    //viewAllBlog.innerHTML = '<a href="#" class="btn btn-primary view-all-blog-btn">View All Articles →</a>';
    blogSection.appendChild(viewAllBlog);
    
    viewAllBlog.querySelector('.view-all-blog-btn').addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'block';
        notesPageSection.style.display = 'none';
        footer.style.display = 'none';
        window.scrollTo(0, 0);
        
        navItems.forEach(nav => nav.classList.remove('active'));
        const blogNavItem = document.querySelector('.nav-item[data-section="blog"]');
        if (blogNavItem) blogNavItem.classList.add('active');
    });
}

const notesSection = document.getElementById('notes');
if (notesSection) {
    const viewAllNotes = document.createElement('div');
    viewAllNotes.className = 'view-all-projects';
    viewAllNotes.innerHTML = '<a href="#" class="btn btn-primary view-all-notes-btn">View All Notes →</a>';
    notesSection.appendChild(viewAllNotes);
    
    viewAllNotes.querySelector('.view-all-notes-btn').addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsPageSection.style.display = 'none';
        blogPageSection.style.display = 'none';
        notesPageSection.style.display = 'block';
        footer.style.display = 'none';
        window.scrollTo(0, 0);
        
        navItems.forEach(nav => nav.classList.remove('active'));
        const notesNavItem = document.querySelector('.nav-item[data-section="notes"]');
        if (notesNavItem) notesNavItem.classList.add('active');
    });
}
*/
// Handle logo click to go home
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(e) {
    e.preventDefault();
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    projectsPageSection.style.display = 'none';
    blogPageSection.style.display = 'none';
    notesPageSection.style.display = 'none';
    footer.style.display = 'block';
    window.scrollTo(0, 0);
    navItems.forEach(nav => nav.classList.remove('active'));
});

// Handle smooth scrolling for hash links within home page
document.querySelectorAll('a[href^="#"]:not(.nav-item):not(.view-all-btn):not(.view-all-blog-btn):not(.view-all-notes-btn)').forEach(anchor => {
   console.log("COOOOOL")
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target && targetId !== 'about' && targetId !== 'projects-page' && targetId !== 'blog-page' && targetId !== 'notes-page') {
            // Ensure we're on the home page
            homeSection.style.display = 'block';
            aboutSection.style.display = 'none';
            projectsPageSection.style.display = 'none';
            blogPageSection.style.display = 'none';
            notesPageSection.style.display = 'none';
            footer.style.display = 'block';
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation based on scroll position (only for home sections)
const sections = document.querySelectorAll('.content-section');

function highlightNavigation() {
    // Only highlight if we're on the home page
    if (homeSection.style.display !== 'none') {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            const section = item.getAttribute('data-section');
            if (section !== 'about') {
                item.classList.remove('active');
                if (section === current) {
                    item.classList.add('active');
                }
            }
        });
    }
}

window.addEventListener('scroll', highlightNavigation);

function typeWriterEffect(element, options = {}) {
    if (!element) return;

    const text = element.textContent;     // Keeps spaces exactly as they are
    const width = element.offsetWidth;    // Prevents layout jump
    const speed = options.speed || 50;    // ms per character
    const delay = options.delay || 500;   // start delay
    const cursor = options.cursor || false;

    // Lock width + reset text
    element.style.display = 'inline-block';
    element.style.width = width + 'px';
    element.textContent = '';

    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, delay);
}

const heroTitle = document.querySelector('.hero h1');
typeWriterEffect(heroTitle, {
    speed: 40,
    delay: 300,
    cursor: true
});



// Newsletter form (placeholder functionality)
document.addEventListener('DOMContentLoaded', () => {
    // Add newsletter modal functionality if needed
    const newsletterButtons = document.querySelectorAll('a[href="#newsletter"]');
    
    newsletterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Newsletter signup coming soon! 📧');
        });
    });
});

// Add hover effect to cards
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Deep dive cards have their own CSS hover effects

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    
    // Only show on mobile
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
        }
    });
}

// Initialize mobile menu
createMobileMenu();

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Performance: Lazy load images (basic implementation)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Blog Data Management
// blogData is loaded from blog-data.js

function initBlog() {
    if (typeof blogData === 'undefined' || !blogData.length) return;
    renderHomeBlog();
    renderBlogPage();
    renderBlogSeries();
    updateBlogSearchPlaceholder();
}

function renderHomeBlog() {
    const container = document.getElementById('home-blog-list');
    if (!container) return;

    const homePosts = blogData.filter(post => post.showOnHome);
    container.innerHTML = homePosts.map(post => `
        <article class="blog-item">
            <a href="${post.mediumUrl}" target="_blank">${post.title}</a>
        </article>
    `).join('');
}

function renderBlogPage() {
    // Render featured article
    const featuredContainer = document.getElementById('blog-featured');
    const featuredPost = blogData.find(post => post.featured);

    if (featuredContainer && featuredPost) {
        featuredContainer.style.display = 'block';
        featuredContainer.innerHTML = `
            <span class="article-badge">Featured • ${featuredPost.category}</span>
            <h2>${featuredPost.title}</h2>
            <div class="article-meta">
                <span class="article-date">${featuredPost.date}</span>
                <span class="article-read-time">• ${featuredPost.readTime}</span>
            </div>
            <p class="article-excerpt">${featuredPost.excerpt}</p>
            <div class="article-tags">
                ${featuredPost.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${featuredPost.mediumUrl}" class="read-more-link" target="_blank">Read on Medium →</a>
        `;
    }

    // Render article cards (all non-featured posts)
    const gridContainer = document.getElementById('blog-articles-grid');
    if (!gridContainer) return;

    const articles = blogData.filter(post => !post.featured && !post.series);
    gridContainer.innerHTML = articles.map(post => `
        <article class="article-card" data-title="${post.title.toLowerCase()}" data-excerpt="${post.excerpt.toLowerCase()}" data-category="${post.category.toLowerCase()}" data-tags="${post.tags.join(' ').toLowerCase()}">
            <span class="article-category">${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="article-footer">
                <span class="article-date">${post.date}</span>
                <a href="${post.mediumUrl}" class="article-link" target="_blank">Read on Medium →</a>
            </div>
        </article>
    `).join('');
}

function renderBlogSeries() {
    const seriesSection = document.getElementById('blog-series-section');
    const seriesList = document.getElementById('blog-series-list');
    if (!seriesSection || !seriesList) return;

    // Group posts by series name
    const seriesMap = {};
    blogData.forEach(post => {
        if (post.series) {
            const name = post.series.name;
            if (!seriesMap[name]) seriesMap[name] = [];
            seriesMap[name].push(post);
        }
    });

    const seriesNames = Object.keys(seriesMap);
    if (seriesNames.length === 0) return;

    // Sort parts within each series
    seriesNames.forEach(name => {
        seriesMap[name].sort((a, b) => a.series.part - b.series.part);
    });

    seriesSection.style.display = 'block';
    seriesList.innerHTML = seriesNames.map(name => {
        const parts = seriesMap[name];
        // Use the category & tags from the first part for the series description
        const firstPart = parts[0];
        return `
            <div class="series-item" data-series-name="${name.toLowerCase()}">
                <div class="series-header">
                    <h3>${name}</h3>
                    <span class="series-count">${parts.length} parts</span>
                </div>
                <ol class="series-parts">
                    ${parts.map(p => `
                        <li>
                            <a href="${p.mediumUrl}" target="_blank">Part ${p.series.part}: ${p.title}</a>
                            <span class="series-part-meta"> · ${p.readTime}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>
        `;
    }).join('');
}

function updateBlogSearchPlaceholder() {
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        searchInput.placeholder = `Search ${blogData.length} articles...`;
    }
}

// Initialize blog from global blogData
initBlog();

// Deep Dives Data Management
function initDeepDives() {
    if (typeof deepDivesData === 'undefined' || !deepDivesData.length) return;
    renderDeepDives();
}

function renderDeepDives() {
    const container = document.getElementById('deep-dives-grid');
    if (!container) return;

    container.innerHTML = deepDivesData.map(dive => {
        const isPublished = dive.status === 'published';
        const cardTag = isPublished ? 'a' : 'div';
        const hrefAttr = isPublished ? `href="${dive.url}" target="_blank"` : '';
        const statusBadge = !isPublished ? '<span class="deep-dive-badge">Coming Soon</span>' : '';

        return `
            <${cardTag} ${hrefAttr} class="deep-dive-card ${!isPublished ? 'coming-soon' : ''}">
                <span class="deep-dive-icon" style="background-color: ${dive.iconColor}15; color: ${dive.iconColor}">
                    <i class="${dive.icon}"></i>
                </span>
                <h3>${dive.title}</h3>
                ${statusBadge}
            </${cardTag}>
        `;
    }).join('');
}

initDeepDives();

// Notes Data Management
// notesData is loaded from notes-data.js

function initNotes() {
    if (typeof notesData === 'undefined' || !notesData.length) return;
    renderHomeNotes();
    renderNotesPage();
    updateNotesSearchPlaceholder();
}

function renderHomeNotes() {
    const container = document.getElementById('home-notes-list');
    if (!container) return;

    const homeNotes = notesData.filter(note => note.showOnHome);
    container.innerHTML = homeNotes.map(note => `
        <article class="blog-item">
            <a href="${note.mediumUrl}" target="_blank">${note.title}</a>
        </article>
    `).join('');
}

function renderNotesPage() {
    // Render pinned note
    const pinnedContainer = document.getElementById('notes-pinned');
    const pinnedNote = notesData.find(note => note.pinned);

    if (pinnedContainer && pinnedNote) {
        pinnedContainer.style.display = 'block';
        pinnedContainer.innerHTML = `
            <span class="pin-icon">📌</span>
            <div class="note-content">
                <h2>${pinnedNote.title}</h2>
                <div class="note-meta">
                    <span class="note-date">${pinnedNote.date}</span>
                    <span class="note-category">${pinnedNote.category}</span>
                </div>
                <p>${pinnedNote.excerpt}</p>
                <a href="${pinnedNote.mediumUrl}" class="note-link" target="_blank">Read Full Note →</a>
            </div>
        `;
    }

    // Render note cards (all non-pinned)
    const gridContainer = document.getElementById('notes-grid');
    if (!gridContainer) return;

    const notes = notesData.filter(note => !note.pinned);
    gridContainer.innerHTML = notes.map(note => `
        <article class="note-card" data-title="${note.title.toLowerCase()}" data-excerpt="${note.excerpt.toLowerCase()}" data-category="${note.category.toLowerCase()}" data-tags="${note.tags.join(' ').toLowerCase()}" data-url="${note.mediumUrl}" onclick="window.open(this.dataset.url, '_blank')">
            <div class="note-header">
                <span class="note-emoji">${note.emoji}</span>
                <span class="note-date">${note.date}</span>
            </div>
            <h3>${note.title}</h3>
            <p>${note.excerpt}</p>
            <div class="note-tags">
                ${note.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');
}

function updateNotesSearchPlaceholder() {
    const searchInput = document.getElementById('notes-search');
    if (searchInput) {
        searchInput.placeholder = `Search ${notesData.length} notes...`;
    }
}

// Initialize notes from global notesData
initNotes();

// Projects Data Management
// projectsData is loaded from projects-data.js

function initProjects() {
    if (typeof projectsData === 'undefined') return;
    renderHomeProjects();
    renderProjectsFeatured();
    renderProjectsCategories();
    renderProjectsContributions();
    updateProjectsSearchPlaceholder();
}

function renderHomeProjects() {
    const container = document.getElementById('home-projects-grid');
    if (!container) return;

    const homeProjects = projectsData.projects.filter(p => p.showOnHome);
    container.innerHTML = homeProjects.map(p => `
        <article class="project-card">
            <div class="project-year">${p.year}</div>
            <h3>${p.title}</h3>
            <p>${p.shortDescription}</p>
            <div class="project-links">
                ${p.links.map(link => `<a href="${link.url}" class="link-pill" target="_blank"><i class="${getLinkIcon(link.label)}"></i>${link.label}</a>`).join('')}
            </div>
        </article>
    `).join('');
}

function renderProjectsFeatured() {
    const section = document.getElementById('projects-featured-section');
    const list = document.getElementById('projects-featured-list');
    if (!section || !list) return;

    const featured = projectsData.projects.filter(p => p.featured);
    if (featured.length === 0) return;

    section.style.display = 'block';
    list.innerHTML = featured.map((p, i) => `
        <div class="featured-project${i % 2 !== 0 ? ' reverse' : ''}">
            <div class="featured-project-content">
                <span class="project-badge">${p.year} \u2022 ${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tech">
                    ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    ${p.links.map(link => `
                        <a href="${link.url}" class="project-link" target="_blank">
                            <span>${link.label}</span>
                            <span>\u2192</span>
                        </a>
                    `).join('')}
                </div>
            </div>
            <div class="featured-project-image">
                <div class="project-image-placeholder">
                    <span>${p.icon}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Map link labels to Font Awesome icon classes
function getLinkIcon(label) {
    const l = label.toLowerCase();
    if (l.includes('github')) return 'fa-brands fa-github';
    if (l.includes('demo') || l.includes('live')) return 'fa-solid fa-arrow-up-right-from-square';
    if (l.includes('paper')) return 'fa-solid fa-file-lines';
    if (l.includes('article')) return 'fa-solid fa-newspaper';
    if (l.includes('video')) return 'fa-solid fa-circle-play';
    if (l.includes('report')) return 'fa-solid fa-file-pdf';
    if (l.includes('notebook')) return 'fa-solid fa-book-open';
    if (l.includes('doc')) return 'fa-solid fa-book';
    if (l.includes('case')) return 'fa-solid fa-briefcase';
    if (l.includes('site')) return 'fa-solid fa-globe';
    return 'fa-solid fa-link';
}

function renderProjectsCategories() {
    const container = document.getElementById('projects-categories');
    if (!container) return;

    const nonFeatured = projectsData.projects.filter(p => !p.featured);
    const categories = {};
    nonFeatured.forEach(p => {
        if (!categories[p.category]) categories[p.category] = [];
        categories[p.category].push(p);
    });

    container.innerHTML = Object.keys(categories).map(cat => `
        <div class="project-category" data-category="${cat.toLowerCase()}">
            <h2>${cat}</h2>
            <div class="project-grid">
                ${categories[cat].map(p => `
                    <div class="project-card-detailed" data-title="${p.title.toLowerCase()}" data-desc="${p.description.toLowerCase()}" data-tech="${p.tech.join(' ').toLowerCase()}">
                        <div class="project-card-header">
                            <span class="project-icon">${p.icon}</span>
                            <span class="project-year">${p.year}</span>
                        </div>
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <div class="project-tech">
                            ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                        </div>
                        <div class="project-links-bottom">
                            ${p.links.map(link => `<a href="${link.url}" class="link-pill" target="_blank"><i class="${getLinkIcon(link.label)}"></i>${link.label}</a>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjectsContributions() {
    const section = document.getElementById('projects-contributions-section');
    const list = document.getElementById('projects-contributions-list');
    if (!section || !list) return;

    const contribs = projectsData.contributions;
    if (!contribs || contribs.length === 0) return;

    section.style.display = 'block';
    list.innerHTML = contribs.map(c => `
        <div class="contribution-item" data-title="${c.title.toLowerCase()}" data-desc="${c.description.toLowerCase()}">
            <div class="contribution-header">
                <h4>${c.title}</h4>
                <span class="contribution-badge">${c.badge}</span>
            </div>
            <p>${c.description}</p>
        </div>
    `).join('');
}

function updateProjectsSearchPlaceholder() {
    const searchInput = document.getElementById('projects-search');
    if (searchInput) {
        const total = projectsData.projects.length + (projectsData.contributions ? projectsData.contributions.length : 0);
        searchInput.placeholder = `Search ${total} projects...`;
    }
}

// Initialize projects
initProjects();

// Search functionality for Projects, Blog, and Notes
function initializeSearch() {
    // Projects Search
    const projectsSearch = document.getElementById('projects-search');
    if (projectsSearch) {
        projectsSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleCount = 0;
            
            // Search through featured projects
            const featuredProjects = document.querySelectorAll('.featured-project');
            featuredProjects.forEach(project => {
                const title = project.querySelector('h3').textContent.toLowerCase();
                const description = project.querySelector('p').textContent.toLowerCase();
                const techStack = project.querySelector('.project-tech').textContent.toLowerCase();
                
                if (searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm) || techStack.includes(searchTerm)) {
                    project.style.display = 'grid';
                    visibleCount++;
                } else {
                    project.style.display = 'none';
                }
            });
            
            // Search through project cards
            const projectCards = document.querySelectorAll('.project-card-detailed');
            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const techStack = card.querySelector('.project-tech') ? card.querySelector('.project-tech').textContent.toLowerCase() : '';
                
                if (searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm) || techStack.includes(searchTerm)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Search through contributions
            const contributions = document.querySelectorAll('.contribution-item');
            contributions.forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide section headers based on visibility
            document.querySelectorAll('.project-category').forEach(category => {
                const visibleCards = category.querySelectorAll('.project-card-detailed[style*="flex"], .contribution-item[style*="block"]');
                if (visibleCards.length === 0 && searchTerm !== '') {
                    category.style.display = 'none';
                } else {
                    category.style.display = 'block';
                }
            });
        });
    }
    
    // Blog Search (now searches dynamically rendered content)
    const blogSearch = document.getElementById('blog-search');
    if (blogSearch) {
        blogSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // Search through featured article
            const featuredArticle = document.getElementById('blog-featured');
            if (featuredArticle) {
                const featuredPost = blogData.find(post => post.featured);
                if (featuredPost) {
                    const match = searchTerm === '' ||
                        featuredPost.title.toLowerCase().includes(searchTerm) ||
                        featuredPost.excerpt.toLowerCase().includes(searchTerm) ||
                        featuredPost.tags.join(' ').toLowerCase().includes(searchTerm) ||
                        featuredPost.category.toLowerCase().includes(searchTerm);
                    featuredArticle.style.display = match ? 'block' : 'none';
                }
            }
            
            // Search through article cards
            const articleCards = document.querySelectorAll('#blog-articles-grid .article-card');
            articleCards.forEach(card => {
                const title = card.dataset.title || '';
                const excerpt = card.dataset.excerpt || '';
                const category = card.dataset.category || '';
                const tags = card.dataset.tags || '';
                
                const match = searchTerm === '' ||
                    title.includes(searchTerm) ||
                    excerpt.includes(searchTerm) ||
                    category.includes(searchTerm) ||
                    tags.includes(searchTerm);
                card.style.display = match ? 'flex' : 'none';
            });

            // Search through series
            const seriesItems = document.querySelectorAll('#blog-series-list .series-item');
            seriesItems.forEach(item => {
                const name = item.dataset.seriesName || '';
                const partsText = item.textContent.toLowerCase();
                
                const match = searchTerm === '' ||
                    name.includes(searchTerm) ||
                    partsText.includes(searchTerm);
                item.style.display = match ? 'block' : 'none';
            });

            // Hide series section header if no series visible
            const seriesSection = document.getElementById('blog-series-section');
            if (seriesSection) {
                const visibleSeries = document.querySelectorAll('#blog-series-list .series-item[style*="block"], #blog-series-list .series-item:not([style*="none"])');
                seriesSection.style.display = (searchTerm === '' || visibleSeries.length > 0) ? 'block' : 'none';
            }
        });
    }
    
    // Notes Search (now searches dynamically rendered content)
    const notesSearch = document.getElementById('notes-search');
    if (notesSearch) {
        notesSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // Search through pinned note
            const pinnedEl = document.getElementById('notes-pinned');
            if (pinnedEl) {
                const pinnedNote = notesData.find(n => n.pinned);
                if (pinnedNote) {
                    const match = searchTerm === '' ||
                        pinnedNote.title.toLowerCase().includes(searchTerm) ||
                        pinnedNote.excerpt.toLowerCase().includes(searchTerm) ||
                        pinnedNote.category.toLowerCase().includes(searchTerm) ||
                        pinnedNote.tags.join(' ').toLowerCase().includes(searchTerm);
                    pinnedEl.style.display = match ? 'block' : 'none';
                }
            }
            
            // Search through note cards
            const noteCards = document.querySelectorAll('#notes-grid .note-card');
            noteCards.forEach(card => {
                const title = card.dataset.title || '';
                const excerpt = card.dataset.excerpt || '';
                const category = card.dataset.category || '';
                const tags = card.dataset.tags || '';
                
                const match = searchTerm === '' ||
                    title.includes(searchTerm) ||
                    excerpt.includes(searchTerm) ||
                    category.includes(searchTerm) ||
                    tags.includes(searchTerm);
                card.style.display = match ? 'block' : 'none';
            });
        });
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);

// Console Easter egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; color: #2563EB;');
console.log('%cLooking for the source code? Check out my GitHub!', 'font-size: 14px;');
console.log('%chttps://github.com/omarait-mlouk', 'font-size: 12px; color: #2563EB;');

// Handle View More links
const viewMoreLinks = document.querySelectorAll('.view-more-link');
viewMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        
        // Find and click the corresponding nav item
        const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
        if (navItem) {
            navItem.click();
        }
    });
});