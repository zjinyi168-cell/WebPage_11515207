(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    button.querySelector('.sr-only').textContent = '開啟選單';
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(isOpen));
    nav.classList.toggle('is-open', isOpen);
    button.querySelector('.sr-only').textContent = isOpen ? '關閉選單' : '開啟選單';
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
})();
