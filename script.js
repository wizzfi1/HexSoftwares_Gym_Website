// Mobile nav toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('show');
});

// Smooth scroll behavior
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

// Dark/light mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌓';
toggleBtn.style = 'position:fixed;bottom:20px;right:20px;padding:10px;font-size:20px;z-index:1000;';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Persist preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}
