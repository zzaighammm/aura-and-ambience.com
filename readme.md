# Aura and Ambience - Luxury Candle Website

A professional e-commerce website for Aura and Ambience, a luxury candle brand. This website showcases the brand's products, allows customers to shop online, and provides information about the company.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Showcase**: Display of candle products with filtering options
- **Shopping Cart**: Functional cart system with localStorage to persist cart items
- **Checkout Process**: Complete checkout flow with shipping and payment information
- **Testimonials**: Customer reviews section
- **Newsletter Signup**: Form for customers to subscribe to the newsletter
- **Contact Form**: Way for customers to get in touch with the business
- **Legal Pages**: Privacy Policy, Terms & Conditions, etc.

## Required Images

Please add the following images to the `images` directory:

1. **Brand Images**
   - `logo.png`: Brand logo (recommended size: 200x50px)
   - `hero.jpg`: Hero background image (recommended size: 1920x1080px)
   - `about.jpg`: About section image (recommended size: 800x600px)
   - `favicon.ico`: Website favicon

2. **Product Images**
   - `candle1.jpg`: Serenity Box Candle - Lavender & Vanilla blend (recommended size: 600x600px)
   - `candle2.jpg`: Harmony Circle Candle - Sandalwood & Amber (recommended size: 600x600px)
   - `candle3.jpg`: Tranquility Jar Candle - Eucalyptus & Mint (recommended size: 600x600px)
   - `candle4.jpg`: Bliss Collection Gift Set - Set of 3 mini candles (recommended size: 600x600px)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid layouts)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts for typography
- LocalStorage for cart persistence

## File Structure

```
aura-and-ambience/
├── index.html              # Main homepage
├── cart.html               # Shopping cart page
├── privacy.html            # Privacy policy page
├── terms.html              # Terms and conditions page (to be created)
├── shipping.html           # Shipping policy page (to be created)
├── faq.html                # FAQ page (to be created)
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript file
├── images/                 # Directory for images
│   ├── logo.png            # Brand logo
│   ├── hero.jpg            # Hero image
│   ├── candle1.jpg         # Product image
│   ├── candle2.jpg         # Product image
│   ├── candle3.jpg         # Product image
│   ├── candle4.jpg         # Product image
│   ├── about.jpg           # About section image
│   └── favicon.ico         # Favicon
└── README.md               # This file
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/aura-and-ambience.git
   cd aura-and-ambience
   ```

2. **Add Required Images**
   - Create an `images` directory if it doesn't exist
   - Add all the required images listed above to the `images` directory
   - Make sure the image names match exactly as specified

3. **Open the website**
   - Simply open the `index.html` file in your web browser to view the website locally
   - Alternatively, you can use a local development server:
     ```
     # Using Python
     python -m http.server
     
     # Using Node.js (after installing http-server)
     npx http-server
     ```

## Customization

### Changing Colors

The website uses CSS variables for easy color customization. Open `style.css` and modify the variables in the `:root` selector:

```css
:root {
    --primary-color: #d14778;    /* Darker pink color */
    --primary-dark: #b13d67;     /* Even darker pink for hover states */
    --secondary-color: #6a5acd;  /* Purple accent color */
    --text-color: #333;          /* Main text color */
    --light-gray: #f9f9f9;       /* Light background color */
    --dark-gray: #666;           /* Secondary text color */
    --white: #fff;               /* White */
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);  /* Standard shadow */
}
```

### Adding Products

To add new products, edit the `index.html` file and add new product entries in the product section:

```html
<div class="product" data-category="new">
    <div class="product-badge">New</div>
    <img src="images/your-new-candle.jpg" alt="Product Name">
    <h3>Product Name</h3>
    <p class="product-description">Product description goes here</p>
    <p class="product-price">Rs. 1,800</p>
    <button class="add-to-cart">Add to Cart</button>
</div>
```

## Deployment

To deploy this website to a live server:

1. Purchase a domain name (e.g., auraandambience.com)
2. Sign up for web hosting
3. Upload all files to your hosting provider using FTP or their file manager
4. Point your domain to the hosting provider

## Future Enhancements

- User authentication system
- Product reviews and ratings
- Wishlist functionality
- Related products suggestions
- Integration with payment gateways
- Admin dashboard for managing products
- Order tracking system

## Contact

For any questions or support, please contact:
- Email: zzaighammm@gmail.com
- Phone: +91 98765 43210

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

&copy; 2025 Aura and Ambience. All rights reserved. 