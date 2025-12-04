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


// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the show class to open/close the menu
});


// ===== SERVICE COMING SOON VALIDATION =====
document.querySelectorAll(".service-card.coming-soon").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.dataset.name || "This service";
    alert(`🚀 ${name} Coming Soon!`);
  });
});
