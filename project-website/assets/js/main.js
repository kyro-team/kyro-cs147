/**
 * CS 147 Project Website - Main JavaScript
 * Handles mobile navigation and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Toggle hamburger animation
            const hamburgers = mobileToggle.querySelectorAll('.hamburger');
            hamburgers.forEach((hamburger, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) {
                        hamburger.style.transform = 'rotate(45deg) translateY(10px)';
                    } else if (index === 1) {
                        hamburger.style.opacity = '0';
                    } else if (index === 2) {
                        hamburger.style.transform = 'rotate(-45deg) translateY(-10px)';
                    }
                } else {
                    hamburger.style.transform = '';
                    hamburger.style.opacity = '';
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const hamburgers = mobileToggle.querySelectorAll('.hamburger');
                hamburgers.forEach(hamburger => {
                    hamburger.style.transform = '';
                    hamburger.style.opacity = '';
                });
            }
        });

        // Close mobile menu when clicking a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const hamburgers = mobileToggle.querySelectorAll('.hamburger');
                    hamburgers.forEach(hamburger => {
                        hamburger.style.transform = '';
                        hamburger.style.opacity = '';
                    });
                }
            });
        });
    }


    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only apply smooth scroll to valid anchor links
            if (href !== '#' && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Get header height for offset
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 0;

                    // Calculate target position
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ============================================
    // ADD FADE-IN ANIMATION ON SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in to cards and sections
    const fadeElements = document.querySelectorAll(
        '.feature-card, .deliverable-card, .team-card, .timeline-item, ' +
        '.finding-card, .pov-card, .hmw-card, .learning-card'
    );

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });


    // ============================================
    // HANDLE IMAGE LOADING ERRORS
    // ============================================
    const images = document.querySelectorAll('img[onerror]');

    images.forEach(img => {
        img.addEventListener('error', function() {
            // The onerror attribute in HTML handles showing placeholders
            // This is just to ensure we don't show broken images
            this.style.display = 'none';

            // Show the placeholder if it exists
            const placeholder = this.parentElement.querySelector('.media-placeholder, .avatar-placeholder, .hero-placeholder, .photo-placeholder, .poster-placeholder');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
    });


    // ============================================
    // LAZY LOADING FOR IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }


    // ============================================
    // BACK TO TOP BUTTON (Optional Enhancement)
    // ============================================
    // Uncomment this section if you want a back-to-top button
    /*
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Style the button
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.3s, transform 0.3s;
        box-shadow: var(--shadow-lg);
        z-index: 999;
        font-size: 1.25rem;
    `;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'translateY(0)';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.transform = 'translateY(100px)';
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    */


    // ============================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ============================================
    // Trap focus in mobile menu when open
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Add keyboard support for card interactions
    const interactiveCards = document.querySelectorAll('.deliverable-card, .download-card');
    interactiveCards.forEach(card => {
        const link = card.querySelector('a');
        if (link) {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    link.click();
                }
            });
        }
    });


    // ============================================
    // FORM VALIDATION (if forms are added later)
    // ============================================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');

                    // Add error message if not exists
                    if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'This field is required';
                        errorMsg.style.color = 'var(--color-error)';
                        errorMsg.style.fontSize = 'var(--font-sm)';
                        field.parentNode.insertBefore(errorMsg, field.nextSibling);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });


    // ============================================
    // CONSOLE MESSAGE (Optional)
    // ============================================
    console.log('%cCS 147 Project Website', 'font-size: 20px; font-weight: bold; color: #8C1515;');
    console.log('%cStanford University | Autumn 2025', 'font-size: 14px; color: #666;');
    console.log('%cBuilt with ❤️ for Human-Computer Interaction', 'font-size: 12px; color: #999;');

});


// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit how often a function can fire
 * Useful for scroll and resize events
 */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get current page name for active nav highlighting
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// Export functions if using modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        isInViewport,
        getCurrentPage
    };
}
