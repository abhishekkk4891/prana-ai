// Video hover logic
document.querySelectorAll('.video-service').forEach(card => {
  const video = card.querySelector('.preview-video');

  card.addEventListener('mouseenter', () => {
    video.currentTime = 0; // start fresh each hover
    video.play().catch(() => {});
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// Contact button redirect
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    window.location.href = '../index.html#contact';
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-links');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
