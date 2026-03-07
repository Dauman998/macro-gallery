/**
 * LIGHTBOX FUNCTIONALITY
 * Click any image with class 'lightbox-enabled' to view enlarged
 * Preserves aspect ratio, shows title, click outside to close
 */

// Create lightbox HTML structure
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img src="" alt="" class="lightbox-image">
            <div class="lightbox-title"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
}

// Initialize lightbox when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox element
    const lightbox = createLightbox();
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Make all gallery images lightbox-enabled
    const galleryImages = document.querySelectorAll('.gallery-item img, .lightbox-enabled');
    
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            // Get image source and alt text
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            
            // Get title from overlay or data attribute
            const parentItem = this.closest('.gallery-item');
            let title = '';
            if (parentItem) {
                const titleElement = parentItem.querySelector('.photo-title');
                if (titleElement) {
                    title = titleElement.textContent;
                }
            } else if (this.dataset.title) {
                title = this.dataset.title;
            }
            
            lightboxTitle.textContent = title;
            
            // Show lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox when clicking close button
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
