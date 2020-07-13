const sliderBtn = document.querySelector(".slider-btn");
const nav = document.querySelector(".nav");
const modalOpenBtn = document.querySelector(".sign-up-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");

const sliderToggle = () => {
  nav.classList.toggle("nav-open");
};

const showModal = () => {
  modal.classList.add("show-modal");
};

const closeModal = () => {
  modal.classList.remove("show-modal");
};

sliderBtn.addEventListener("click", sliderToggle);
modalOpenBtn.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
