// Redirect to contact section on main page
const btn = document.getElementById("contactBtn");
if (btn) {
  btn.addEventListener("click", () => {
    window.location.href = "../index.html#contact";
  });
}

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
