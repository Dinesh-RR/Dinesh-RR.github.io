// Typed.js for header animation
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector('.typing')) {
    var typed = new Typed('.typing', {
      strings: ["Site Reliability Engineering", "DevOps", "Kubernetes", "Cloud Automation", "Middleware Optimization"],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65
    });
  }
});
