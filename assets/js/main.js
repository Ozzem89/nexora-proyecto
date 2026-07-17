document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration: 650, once: true, offset: 40, easing: 'ease-out-cubic' });

  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

});
