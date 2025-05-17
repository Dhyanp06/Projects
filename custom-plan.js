// Update total price when services are selected
document.querySelectorAll(".services input").forEach(service => {
    service.addEventListener("change", updateTotal);
});

function updateTotal() {
    let total = 0;
    let selectedServices = [];
    
    document.querySelectorAll(".services input:checked").forEach(service => {
        total += parseInt(service.getAttribute("data-price"));
        selectedServices.push(service.value);
    });
    
    document.getElementById("totalPrice").innerText = `₹${total}`;
    
    // Update plan name as services are selected
    const planNameElement = document.getElementById("planName");
    if (selectedServices.length > 0) {
        planNameElement.innerText = `Selected Services: ${selectedServices.join(", ")}`;
    } else {
        planNameElement.innerText = "No services selected";
    }
}

// Handle form submission
document.getElementById("customPlanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get all selected services
    let selectedServices = [];
    document.querySelectorAll(".services input:checked").forEach(service => {
        selectedServices.push(service.value);
    });
    
    // Check if any services were selected
    if (selectedServices.length === 0) {
        alert("Please select at least one service!");
        return;
    }
    
    let additionalInfo = document.getElementById("additional").value;
    
    // Get the total price (removing non-digit characters)
    const totalPrice = parseInt(document.getElementById("totalPrice").innerText.replace(/[^\d]/g, ''));
    
    // Get current cart or initialize empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Generate a unique ID and create a descriptive name
    const planId = `custom-${Date.now()}`;
    const planName = `Custom Plan: ${selectedServices.join(", ")}`;
    
    // Add the custom plan to cart with proper price
    cart.push({
        id: planId,
        name: planName,
        price: totalPrice,
        quantity: 1
    });
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Cart after adding custom plan:", cart); // for debugging
    
    // Redirect to cart page
    window.location.href = "addtocart.html";
});