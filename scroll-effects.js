/**
 * Scroll Effects Script
 * Handles header auto-hide and back-to-top button functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const backToTopButton = document.querySelector('.back-to-top');
    
    let lastScrollTop = 0;
    let scrollTimeout;
    let isScrolling = false;
    
    // Header auto-hide functionality
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Clear the timeout throughout the scroll
        clearTimeout(scrollTimeout);
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide header
            header.classList.add('hidden');
            isScrolling = true;
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up - show header
            header.classList.remove('hidden');
            isScrolling = true;
        }
        
        // Show header when scrolling stops
        scrollTimeout = setTimeout(function() {
            header.classList.remove('hidden');
            isScrolling = false;
        }, 150);
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Back to top button visibility
        if (backToTopButton) {
            if (scrollTop > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    });
    
    // Back to top button click handler
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
