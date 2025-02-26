(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    closeModalBtn1: document.querySelector("[data-modal-close1]"),
    closeModalBtn2: document.querySelector("[data-modal-close2]"),
    closeModalBtn3: document.querySelector("[data-modal-close3]"),
	closeModalBtn4: document.querySelector("[data-modal-close4]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn4.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();