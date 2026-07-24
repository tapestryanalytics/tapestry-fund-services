const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
}
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
