// Smooth scroll for same-page anchors (keeps behavior consistent with index)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      history.pushState(null, null, href);
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

// Hamburger toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', () => navlinks.classList.toggle('show'));
  hamburger.addEventListener('keypress', (e) => { if (e.key === 'Enter') navlinks.classList.toggle('show'); });
}

// Portfolio item click: open respective portfolio page
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    const href = item.dataset.href;
    if (href) {
      // open in same tab
      window.location.href = href;
    }
  });

  // keyboard accessibility
  item.setAttribute('tabindex', '0');
  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const href = item.dataset.href;
      if (href) window.location.href = href;
    }
  });
});

// Portfolio button on other pages should link to this page — if it remains as .portfolio-btn logic elsewhere, keep this fallback:
document.querySelectorAll(".portfolio-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    // If already on portfolio page, do nothing; otherwise go there.
    if (!location.pathname.endsWith('portfolio.html')) {
      window.location.href = 'portfolio.html';
    }
  });
});
