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

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('.content-section');
const navItems = document.querySelectorAll('.nav-item');

function highlightNavigation() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
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
const cards = document.querySelectorAll('.card, .project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

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

// Console Easter egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; color: #2563EB;');
console.log('%cLooking for the source code? Check out my GitHub!', 'font-size: 14px;');
console.log('%chttps://github.com/omarait-mlouk', 'font-size: 12px; color: #2563EB;');