// Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Close menu when clicking outside
        document.addEventListener('click', function closeMenu(e) {
            if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                document.removeEventListener('click', closeMenu);
            }
        });
    });
    
    // Close menu when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}
