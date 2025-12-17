// =============================================
// BAKI KHATA LANDING PAGE SCRIPTS
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    initSmoothScrolling();

    // Navbar scroll effect
    initNavbarScroll();

    // Mobile menu toggle
    initMobileMenu();

    // Animate elements on scroll
    initScrollAnimations();

    // Download button tracking
    initDownloadTracking();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-links');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

/**
 * Navbar background on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Add mobile menu styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 1rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                gap: 1rem;
            }

            .nav-links.active a {
                padding: 0.75rem 1rem;
                border-radius: 8px;
            }

            .nav-links.active a:hover {
                background: rgba(16, 185, 129, 0.1);
            }

            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Animate elements when they come into view
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .step-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

/**
 * Track download button clicks
 */
function initDownloadTracking() {
    const downloadBtns = document.querySelectorAll('a[download], .btn-download');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Track download event (you can integrate with analytics here)
            console.log('Download initiated:', new Date().toISOString());

            // Show a thank you message
            showToast('ডাউনলোড শুরু হয়েছে! ধন্যবাদ 🎉');

            // You can add Google Analytics or other tracking here
            // gtag('event', 'download', { 'event_category': 'APK', 'event_label': 'BakiKhata' });
        });
    });
}

/**
 * Show toast notification
 */
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white;
        padding: 16px 32px;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 500;
        box-shadow: 0 10px 40px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        opacity: 0;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    });

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Add parallax effect to hero section
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

/**
 * Add typing effect to tagline (optional enhancement)
 */
function initTypingEffect() {
    const tagline = document.querySelector('.hero-tagline');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.borderRight = '2px solid var(--primary)';

    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            tagline.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
            tagline.style.borderRight = 'none';
        }
    }, 50);
}

// Optional: Uncomment to enable typing effect
// initTypingEffect();
