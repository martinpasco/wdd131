const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuButton.classList.toggle('show');
});
