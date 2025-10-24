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