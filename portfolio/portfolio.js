console.log("Portfolio page loaded");

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

if (hamburger && navlinks) {
  hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("show");
  });
}

/* ===== MOBILE DROPDOWN OPEN ON TAP ===== */
document.querySelectorAll(".dropdown > a").forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      trigger.nextElementSibling.classList.toggle("show");
    }
  });
});

/* ===== PORTFOLIO ITEM CLICK ===== */
document.querySelectorAll(".portfolio-item").forEach(item => {
  item.addEventListener("click", () => {
    const href = item.dataset.href;
    if (href) window.location.href = href;
  });

  item.setAttribute("tabindex", "0");

  item.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const href = item.dataset.href;
      if (href) window.location.href = href;
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
