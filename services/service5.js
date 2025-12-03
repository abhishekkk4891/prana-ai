// Redirect to contact section on main page
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "../index.html#contact";
  });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
