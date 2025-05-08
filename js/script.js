const btnsOpenModal = document.querySelectorAll("[data-open-modal]");
const backdrop = document.querySelector(".backdrop");
const btnCloseModal = document.querySelector(".modal-close");

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    backdrop.classList.remove("is-hiden");
    document.body.style.overflow = "hidden";
  });
});

btnCloseModal.addEventListener("click", () => {
  backdrop.classList.add("is-hiden");
  document.body.style.overflow = "auto";
});
