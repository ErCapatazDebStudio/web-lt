// ===== MODAL VIDEO PLAYER =====
function openModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.add('active');
    const video = document.getElementById('mainVideo');
    video.play();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('active');
    const video = document.getElementById('mainVideo');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== NAVBAR =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== INITIALIZE AOS =====
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 100
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'linear-gradient(to bottom, rgba(5, 5, 5, 0.99), rgba(5, 5, 5, 0.85))';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(5, 5, 5, 0.98), rgba(5, 5, 5, 0.8))';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== HERO BUTTON RIPPLE EFFECT =====
const buttons = document.querySelectorAll('.hero-btn');

buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.position = 'absolute';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== PARALLAX SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ===== CONSOLE MESSAGE =====
console.log(
    '%cLARA TOLOSA',
    'font-size: 24px; font-weight: bold; color: #b30000; text-shadow: 0 0 10px rgba(15, 76, 129, 0.5);'
);
console.log(
    '%cSi lo ves, actúa… No te calles.',
    'font-size: 16px; color: #0f4c81; font-style: italic;'
);
console.log(
    '%cUn cortometraje sobre conciencia social',
    'font-size: 12px; color: #999;'
);
