// ===== MODAL VIDEO PLAYER =====
function openModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load video when modal opens
    loadVideoBlob().then(() => {
        const video = document.getElementById('mainVideo');
        if (video && video.tagName === 'VIDEO') {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Autoplay prevented:', error);
                });
            }
        }
    }).catch(error => {
        console.error('Error in openModal:', error);
    });
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    const video = document.getElementById('mainVideo');
    if (video && video.tagName === 'VIDEO') {
        video.pause();
        video.currentTime = 0;
    }
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

// ===== LOAD VIDEO AS BLOB =====
async function loadVideoBlob() {
    try {
        const videoElement = document.getElementById('mainVideo');
        const loader = document.getElementById('videoLoader');
        
        if (!videoElement || !loader) {
            console.error('Video elements not found');
            return;
        }
        
        // Try multiple video sources with fallbacks
        const videoSources = [
            {
                url: 'https://cdn.jsdelivr.net/gh/ErCapatazDebStudio/web-lt@main/assets/Lara_Tolosa_ultra.mp4',
                name: 'Lara Tolosa Ultra (5MB)'
            },
            {
                url: 'https://cdn.jsdelivr.net/gh/ErCapatazDebStudio/web-lt@main/assets/Lara_Tolosa_compressed.mp4',
                name: 'Lara Tolosa Compressed (14MB)'
            }
        ];
        
        for (const source of videoSources) {
            try {
                console.log(`Attempting: ${source.name}`);
                loader.innerHTML = `<p style="color: #0f4c81; font-family: Poppins, sans-serif; font-size: 14px;">Cargando ${source.name}...</p>`;
                
                const response = await fetch(source.url, { 
                    mode: 'cors',
                    method: 'GET',
                    headers: { 'Accept': 'video/mp4' }
                });
                
                if (response.ok) {
                    console.log(`Successfully fetching: ${source.name}`);
                    const blob = await response.blob();
                    const blobUrl = URL.createObjectURL(blob);
                    
                    // Clear video element
                    videoElement.innerHTML = '';
                    
                    // Create and add source element
                    const sourceElement = document.createElement('source');
                    sourceElement.src = blobUrl;
                    sourceElement.type = 'video/mp4';
                    videoElement.appendChild(sourceElement);
                    
                    // Show video player, hide loader
                    videoElement.style.display = 'block';
                    loader.style.display = 'none';
                    
                    // Load and try to play
                    videoElement.load();
                    console.log(`Video loaded successfully: ${source.name}`);
                    return true;
                }
            } catch (error) {
                console.warn(`Failed: ${source.name} - ${error.message}`);
            }
        }
        
        // If all sources failed
        throw new Error('All video sources failed');
        
    } catch (error) {
        console.error('Critical error loading video:', error);
        const loader = document.getElementById('videoLoader');
        if (loader) {
            loader.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: #b30000; font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 10px;">
                        ⚠ No se pudo cargar el video
                    </p>
                    <p style="color: #999; font-family: Poppins, sans-serif; font-size: 14px; margin-bottom: 20px;">
                        Por favor recarga la página e intenta de nuevo
                    </p>
                    <button onclick="location.reload()" style="
                        padding: 12px 30px;
                        background: #0f4c81;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-family: Poppins, sans-serif;
                        font-weight: 600;
                    ">Recargar página</button>
                </div>
            `;
        }
    }
}
