let currentTestimonialIndex = 0;

const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  if (index >= testimonials.length) {
    currentTestimonialIndex = 0;
  } else if (index < 0) {
    currentTestimonialIndex = testimonials.length - 1;
  } else {
    currentTestimonialIndex = index;
  }

  testimonials.forEach((testimonial, i) => {
    testimonial.style.display =
      i === currentTestimonialIndex ? "block" : "none";
  });
}

function changeTestimonial(direction) {
  showTestimonial(currentTestimonialIndex + direction);
}

// Initial setup
showTestimonial(currentTestimonialIndex);
