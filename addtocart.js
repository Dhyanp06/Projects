document.addEventListener('DOMContentLoaded', function() {
    // Load cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartContainer = document.querySelector('.cart-container');
    
    // Display empty cart message if cart is empty
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartContainer.style.display = 'none';
    } else {
        renderCartItems(cart);
        updateCartSummary(cart);
    }
    
    // Event listeners for buttons
    document.getElementById('continue-shopping').addEventListener('click', function() {
        window.location.href = 'plans.html';
    });
    
    document.getElementById('browse-plans').addEventListener('click', function() {
        window.location.href = 'plans.html';
    });
    
    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Here you would redirect to a checkout page
        window.location.href = 'Privacy.html';
    });
    
    // Function to render cart items
    function renderCartItems(cart) {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.dataset.id = item.id;
            
            cartItemElement.innerHTML = `
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                <div class="item-price">₹${(isNaN(parseInt(item.price)) ? 0 : parseInt(item.price)).toLocaleString()}</div>
                </div>
                
                <button class="remove-btn">Remove</button>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
            
            // Add event listeners for quantity buttons
            const decreaseBtn = cartItemElement.querySelector('.decrease');
            const increaseBtn = cartItemElement.querySelector('.increase');
            const removeBtn = cartItemElement.querySelector('.remove-btn');
            const quantityInput = cartItemElement.querySelector('.quantity-input');
            
            
            
            removeBtn.addEventListener('click', function() {
                const index = cart.findIndex(cartItem => cartItem.id === item.id);
                if (index > -1) {
                    cart.splice(index, 1);
                    cartItemElement.remove();
                    updateCart(cart);
                    
                    // Show empty cart message if cart becomes empty
                    if (cart.length === 0) {
                        emptyCartMessage.style.display = 'block';
                        cartContainer.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Function to update cart in localStorage and summary
    function updateCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary(cart);
    }
    
    // Function to update cart summary
    function updateCartSummary(cart) {
        const subtotalElement = document.getElementById('subtotal');
        const taxElement = document.getElementById('tax');
        const totalElement = document.getElementById('total');
        
        // Calculate subtotal
        let subtotal = 0;
        
        cart.forEach(item => {
            // Ensure price is treated as a number
            let itemPrice = parseInt(item.price);
            if (isNaN(itemPrice)) {
                itemPrice = 0;
            }
            subtotal += itemPrice * item.quantity;
        });
        
        // Calculate tax (18% GST)
        const tax = subtotal * 0.18;
        
        // Calculate total
        const total = subtotal + tax;
        
        // Store total for checkout
        localStorage.setItem('totalAmount', total);
        
        // Format with commas for thousands
        subtotalElement.textContent = `₹${subtotal.toLocaleString()}`;
        taxElement.textContent = `₹${Math.round(tax).toLocaleString()}`;
        totalElement.textContent = `₹${Math.round(total).toLocaleString()}`;
    }
});