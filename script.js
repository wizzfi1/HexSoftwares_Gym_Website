// Toggle mobile nav menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
    document.getElementById('nav').classList.remove('show');
  });
});
