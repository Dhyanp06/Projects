const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')

    document.addEventListener("DOMContentLoaded", function () {
        const loginButton = document.getElementById("loginButton");
    
        // Check login status from localStorage
        if (localStorage.getItem("isLoggedIn") === "true") {
            loginButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="Profile" class="w-8 h-8 rounded-full">'; // Profile icon
            loginButton.href = "Home.html"; // Redirect to Profile
        }
    
        // Logout function
        if (loginButton) {
            loginButton.addEventListener("click", function () {
                if (localStorage.getItem("isLoggedIn") === "true") {
                    localStorage.removeItem("isLoggedIn"); // Clear login state
                    location.reload(); // Reload page to update button
                }
            });
        }
    });
    
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
    
})
document.getElementById('loginBtn').addEventListener('click', function () {
    // Optionally add form validation here
    window.location.href = 'Home.html';
});

document.getElementById('signupBtn').addEventListener('click', function () {
    // Optionally add form validation here
    window.location.href = 'Home.html';
});