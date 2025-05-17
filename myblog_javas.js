const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle visibility of the extra content
    const moreText = this.previousElementSibling.querySelector(".more-text");
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      this.textContent = "Read Less"; // Change button text
    } else {
      moreText.style.display = "none";
      this.textContent = "Read More"; // Revert button text
    }
  });
});
