const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle menu on hamburger click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Collapse menu when any nav link is clicked
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
