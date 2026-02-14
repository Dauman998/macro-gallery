/**
 * Lightbox Script
 * Handles image lightbox functionality with title and description
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    
    lightboxOverlay.innerHTML = `
        <div class="lightbox-content">
            <div class="lightbox-image-container">
                <img src="" alt="">
            </div>
            <div class="lightbox-info">
                <h3 class="lightbox-title"></h3>
                <p class="lightbox-description"></p>
            </div>
        </div>
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    `;
    
    document.body.appendChild(lightboxOverlay);
    
    const lightboxImg = lightboxOverlay.querySelector('.lightbox-image-container img');
    const lightboxTitle = lightboxOverlay.querySelector('.lightbox-title');
    const lightboxDescription = lightboxOverlay.querySelector('.lightbox-description');
    const closeButton = lightboxOverlay.querySelector('.lightbox-close');
    
    // Get all lightbox triggers
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    
    // Open lightbox
    function openLightbox(img) {
        const src = img.src;
        const title = img.dataset.title || '';
        const description = img.dataset.description || '';
        
        lightboxImg.src = src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        
        // Show info section only if there's a title or description
        const infoSection = lightboxOverlay.querySelector('.lightbox-info');
        if (title || description) {
            infoSection.style.display = 'block';
        } else {
            infoSection.style.display = 'none';
        }
        
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear image after animation
        setTimeout(() => {
            lightboxImg.src = '';
            lightboxTitle.textContent = '';
            lightboxDescription.textContent = '';
        }, 400);
    }
    
    // Add click handlers to all lightbox triggers
    lightboxTriggers.forEach(trigger => {
        const img = trigger.querySelector('img');
        if (img) {
            trigger.addEventListener('click', () => openLightbox(img));
        }
    });
    
    // Close on close button click
    closeButton.addEventListener('click', closeLightbox);
    
    // Close on overlay click (but not on content click)
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        }
    });
});
