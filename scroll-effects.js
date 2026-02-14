/**
 * SCROLL EFFECTS
 * 1. Auto-hiding header (hides on scroll down, shows on scroll up/stop)
 * 2. Back-to-top button (appears when scrolled down)
 */

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let scrollTimeout;
    let isScrolling = false;

    // Create and add back-to-top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Handle scroll events
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Mark that we're scrolling
        isScrolling = true;

        // Auto-hiding header logic
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down & past threshold - hide header
            header.classList.add('header-hidden');
        } else {
            // Scrolling up - show header
            header.classList.remove('header-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

        // Show header when scrolling stops
        scrollTimeout = setTimeout(function() {
            isScrolling = false;
            header.classList.remove('header-hidden');
        }, 150); // Show header 150ms after scrolling stops

        // Back-to-top button visibility
        if (currentScroll > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, false);

    // Back-to-top button click handler
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
