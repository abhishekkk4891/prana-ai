// Simple interactivity for portfolio buttons
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
