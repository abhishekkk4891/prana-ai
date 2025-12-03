// Redirect to contact section
document.getElementById("contactBtn").addEventListener("click", () => {
  window.location.href = "../index.html#contact";
});

// Portfolio popup
document.querySelectorAll(".portfolio-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});

// Before/After Slider Logic
document.querySelectorAll(".slider-container").forEach(container => {

  const after = container.querySelector(".after-img");
  const line  = container.querySelector(".slider-line");
  const handle = container.querySelector(".slider-handle");

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    let percent = (x / rect.width) * 100;

    after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    line.style.left = `${percent}%`;
    handle.style.left = `${percent}%`;
  };

  const start = () => { isDragging = true; };
  const stop  = () => { isDragging = false; };

  container.addEventListener("mousedown", e => { start(); updateSlider(e.clientX); });
  window.addEventListener("mousemove", e => { if (isDragging) updateSlider(e.clientX); });
  window.addEventListener("mouseup", stop);

  container.addEventListener("touchstart", e => { start(); updateSlider(e.touches[0].clientX); }, { passive: true });
  window.addEventListener("touchmove", e => { if (isDragging) updateSlider(e.touches[0].clientX); }, { passive: true });
  window.addEventListener("touchend", stop);
});

// Contact redirect
document.getElementById("contactBtn").addEventListener("click", () => {
  window.location.href = "../index.html#contact";
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
