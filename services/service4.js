// Redirect to contact section on main page
document.getElementById("contactBtn").addEventListener("click", () => {
  window.location.href = "../index.html#contact";
});

// portfolio validation
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});
