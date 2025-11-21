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
const navItems = document.querySelectorAll('.nav-item[data-section]');
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
const projectsSection = document.getElementById('projects');
if (projectsSection) {
    // Add a "View All Projects" button to the projects section
    const viewAllButton = document.createElement('div');
    viewAllButton.className = 'view-all-projects';
    viewAllButton.innerHTML = '<a href="#" class="btn btn-primary view-all-btn">View All Projects →</a>';
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
const blogSection = document.getElementById('blog');
if (blogSection) {
    const viewAllBlog = document.createElement('div');
    viewAllBlog.className = 'view-all-projects';
    viewAllBlog.innerHTML = '<a href="#" class="btn btn-primary view-all-blog-btn">View All Articles →</a>';
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

// Console Easter egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; color: #2563EB;');
console.log('%cLooking for the source code? Check out my GitHub!', 'font-size: 14px;');
console.log('%chttps://github.com/omarait-mlouk', 'font-size: 12px; color: #2563EB;');