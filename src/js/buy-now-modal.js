(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-modal-open]"),
    openModalMenuBtn: document.querySelector("[data-buy-modal-menu-open]"),
    closeModalBtn: document.querySelector("[data-buy-modal-close]"),
    modal: document.querySelector("[data-buy-modal]"),
    menu: document.querySelector("[data-menu]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalMenuBtn.addEventListener("click", closeModalMenu);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function closeModalMenu() {
    refs.modal.classList.toggle("is-hidden");
    refs.menu.classList.toggle("is-open");
  }
})();