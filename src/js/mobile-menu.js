(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    anhorLink: document.querySelector('.js-anchor-scroll'),
    anhorLinkSecond: document.querySelector('.js-anchor-scroll-second'),
    anhorLinkThird: document.querySelector('.js-anchor-scroll-third'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.anhorLink.addEventListener('click', toggleModal);
  refs.anhorLinkSecond.addEventListener('click', toggleModal);
  refs.anhorLinkThird.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

