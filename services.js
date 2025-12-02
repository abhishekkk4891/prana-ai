function openService(page) {
  window.location.href = page;
}
document.querySelectorAll('.video-service').forEach(card => {
  const video = card.querySelector('.preview-video');
  
  card.addEventListener('mouseenter', () => {
    video.currentTime = 0; // start from beginning each hover
    video.play().catch(err => console.log('Autoplay prevented:', err));
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// portfolio validation
document.querySelectorAll(".portfolio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Portfolio page coming soon!");
  });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the show class to open/close the menu
});