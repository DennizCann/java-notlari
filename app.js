document.documentElement.classList.remove('no-js');
const menuButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('#sidebar');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpen));
  sidebar.classList.toggle('is-open', isOpen);
  menuButton.textContent = isOpen ? '✕ Kapat' : '☰ Konular';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    menuButton.click();
    menuButton.focus();
  }
});
