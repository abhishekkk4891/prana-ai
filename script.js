// Smooth scroll for About Us and Contact links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Prevent auto-scroll if page loads with a hash (like #about)
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    // Instantly scroll to top to cancel jump
    window.scrollTo(0, 0);
    
    // Optional: Remove hash from URL to keep it clean
    history.replaceState(null, null, window.location.pathname);
  }
});

// ===== CONTACT FORM HANDLER =====
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // ===== BASIC VALIDATION =====
  if (!firstName || !lastName || !email || !message) {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  // Simple email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  const data = { firstName, lastName, email, message };

  try {
    const res = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await res.json();

    if (result.success) {
      alert("✅ Message submitted successfully!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("🚫 Unable to submit form. Please check your connection or try again later.");
  }
});
