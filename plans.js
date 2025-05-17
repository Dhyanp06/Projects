// Get all the buttons with the class 'button'
const buttons = document.querySelectorAll('.button');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent the default link behavior
        e.preventDefault();
        
        // Get product data from data attributes
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        // Get the product description from the parent div
        const productDiv = this.closest('div.basic, div.proplan, div.VIP, div.Custom');
        const productTitle = productDiv.querySelector('h4').textContent;
        
        // Parse productPrice as number, fallback to 0 if NaN or missing
        let priceValue = parseFloat(productPrice);
        if (isNaN(priceValue)) {
            priceValue = 0;
        }
        
        // Create a product object
        const product = {
            id: productName,
            name: productTitle,
            price: priceValue,
            quantity: 1
        };
        
        // Save to localStorage
        saveToCart(product);
        
        // Redirect to cart page
        window.location.href = 'addtocart.html';
    });
});

// Function to save products to cart in localStorage
function saveToCart(product) {
    // Get existing cart or initialize empty array`
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
        // Update existing product
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product to cart
        cart.push(product);
    }
    
    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}