// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('search');
const contactForm = document.getElementById('contactForm');
const scrollTopBtn = document.querySelector('.scroll-to-top');

// Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
}

// Search Functionality
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const propertyCards = document.querySelectorAll('.property-card');

        propertyCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) || description.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// Form Validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate name
        const name = contactForm.querySelector('#name');
        if (name.value.trim().length < 2) {
            name.classList.add('invalid');
            isValid = false;
        } else {
            name.classList.remove('invalid');
        }

        // Validate email
        const email = contactForm.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.remove('invalid');
        }

        // Validate message
        const message = contactForm.querySelector('#message');
        if (message.value.trim().length < 10) {
            message.classList.add('invalid');
            isValid = false;
        } else {
            message.classList.remove('invalid');
        }

        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Scroll to Top
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});
