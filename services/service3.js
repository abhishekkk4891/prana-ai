// Video hover logic
document.querySelectorAll('.video-service').forEach(card => {
  const video = card.querySelector('.preview-video');
  
  card.addEventListener('mouseenter', () => {
    video.currentTime = 0; // start fresh each hover
    video.play().catch(err => console.log('Autoplay prevented:', err));
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// Contact button redirect
document.getElementById('contactBtn').addEventListener('click', () => {
  window.location.href = '../index.html#contact';
});

// portfolio validation
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});
