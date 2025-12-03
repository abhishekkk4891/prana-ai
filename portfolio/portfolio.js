console.log("Portfolio page loaded");

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navlinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => navlinks.classList.toggle("show"));

/* ===== PORTFOLIO LOGIC ===== */

// List of READY portfolios (only Jasmine for now)
const availablePortfolios = ["jasmine"];  
// Later just add names here: ["jasmine", "ojasvi", "nidhi"]

document.querySelectorAll(".portfolio-item").forEach(item => {
  item.addEventListener("click", () => {
    const href = item.dataset.href;     // e.g. "./jasmine.html"
    const name = href.split("/").pop().split(".")[0]; // extract "jasmine"

    if (availablePortfolios.includes(name)) {
      // Portfolio exists → open page
      window.location.href = href;
    } else {
      // Portfolio not ready → show validation message
      alert("🚀 Portfolio coming soon!");
    }
  });

  // Keyboard accessibility (Enter key)
  item.setAttribute("tabindex", "0");
  item.addEventListener("keypress", (e) => {
    if (e.key === "Enter") item.click();
  });
});

/* ===== MOBILE DROPDOWN OPEN ON TAP ===== */
document.querySelectorAll(".dropdown > a").forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      trigger.nextElementSibling.classList.toggle("show");
    }
  });
});

/* ===== SMOOTH SCROLL FOR INTERNAL LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    }
  });
});
