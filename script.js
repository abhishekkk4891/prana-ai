// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);

    // If it's a same-page link
    if (target) {
      e.preventDefault();
      history.pushState(null, null, href); // update hash in URL smoothly

      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// ===== SCROLL TO SECTION IF COMING FROM ANOTHER PAGE (e.g. index.html#contact) =====
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Delay ensures content & layout are ready
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }, 500);
    }
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
    const res = await fetch(`${window.location.origin}/submit`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await res.json();

    if (result.message) {
      alert("✅ " + result.message);
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("🚫 Unable to submit form. Please check your connection or try again later.");
  }
});

// ===== SIMPLE INTERACTIVITY FOR PORTFOLIO BUTTONS =====
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});

// portfolio validation
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});


// Hamburger toggle functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });

