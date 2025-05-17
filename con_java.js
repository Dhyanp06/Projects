function validateForm() {
  let isValid = true; // Clear previous error messages
  document.getElementById("name-error").innerText = "";
  document.getElementById("email-error").innerText = "";
  document.getElementById("message-error").innerText = ""; // Get form inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim(); // Name validation if (name === '')
  {
    document.getElementById("name-error").innerText = "Name is required";
    isValid = false;
  } // Email validation const emailPattern =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    document.getElementById("email-error").innerText = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerText =
      "Please enter a valid email address";
    isValid = false;
  } // Message validation if (message === '')
  {
    document.getElementById("message-error").innerText = "Message is required";
    isValid = false;
  }
  return isValid;
}
