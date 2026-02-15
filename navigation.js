// Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

// Create and add menu overlay
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
menuOverlay.id = 'menuOverlay';
document.body.appendChild(menuOverlay);

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
    
    // Close menu when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    });
}
