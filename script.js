// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Product Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide products based on filter
            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                } else {
                    if (product.getAttribute('data-category') === filter) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Shopping Cart Functionality
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Update cart count display
    function updateCartCount() {
        cartCount.textContent = cartItems.length;
        // Save cart items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    // Initialize cart count
    updateCartCount();
    
    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('.product-price').textContent;
            const productImage = product.querySelector('img').src;
            
            // Get existing cart items or initialize empty array
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            // Check if product already exists in cart
            const existingProductIndex = cartItems.findIndex(item => item.name === productName);
            
            if (existingProductIndex !== -1) {
                // Increment quantity if product already in cart
                cartItems[existingProductIndex].quantity += 1;
            } else {
                // Add new product to cart
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
            }
            
            // Save updated cart to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // Update cart count
            updateCartCount();
            
            // Show success message
            alert(`${productName} has been added to your cart!`);
        });
    });
    
    // Notification function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add notification to body
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            showNotification('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to a server
            // For now, we'll just show a success message
            showNotification('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    // Testimonial Slider (simple auto-scroll)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider && testimonialSlider.children.length > 1) {
        let scrollAmount = 0;
        const testimonialWidth = testimonialSlider.querySelector('.testimonial').offsetWidth + 30; // width + gap
        
        // Auto scroll testimonials
        setInterval(() => {
            scrollAmount += testimonialWidth;
            if (scrollAmount >= testimonialSlider.scrollWidth - testimonialSlider.offsetWidth) {
                scrollAmount = 0;
            }
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
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
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}); 