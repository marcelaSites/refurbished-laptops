// Main JavaScript for Refurbished Laptops Ireland

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Product Gallery
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail img');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImage.src = this.src;
                
                // Update active thumbnail
                thumbnails.forEach(thumb => {
                    thumb.parentElement.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            });
        });
    }
    
    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', function() {
                // Toggle current item
                item.classList.toggle('active');
                
                // Close other items (uncomment for single open accordion)
                /*
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                */
            });
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Reset error states
            [nameInput, emailInput, messageInput].forEach(input => {
                input.classList.remove('error');
            });
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameInput.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                messageInput.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                
                // In a real application, you would send the form data to a server here
                // For this demo, we're just showing a success message
            }
        });
    }
    
    // Product Filters
    const filterForm = document.getElementById('filterForm');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterForm && productCards.length > 0) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const brandFilter = document.getElementById('brandFilter').value;
            const priceMinFilter = parseFloat(document.getElementById('priceMin').value) || 0;
            const priceMaxFilter = parseFloat(document.getElementById('priceMax').value) || Infinity;
            
            productCards.forEach(card => {
                const productBrand = card.dataset.brand;
                const productPrice = parseFloat(card.dataset.price);
                
                let shouldShow = true;
                
                // Filter by brand
                if (brandFilter && brandFilter !== 'all' && productBrand !== brandFilter) {
                    shouldShow = false;
                }
                
                // Filter by price range
                if (productPrice < priceMinFilter || productPrice > priceMaxFilter) {
                    shouldShow = false;
                }
                
                // Show/hide the card
                card.style.display = shouldShow ? 'block' : 'none';
            });
        });
        
        // Reset filters
        const resetButton = document.getElementById('resetFilters');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                filterForm.reset();
                
                // Show all products
                productCards.forEach(card => {
                    card.style.display = 'block';
                });
            });
        }
    }
    
    // WhatsApp Button Click Tracking
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .whatsapp-float');
    
    if (whatsappButtons.length > 0) {
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                // In a real application, you would track this event with analytics
                console.log('WhatsApp button clicked');
            });
        });
    }
    
    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});
