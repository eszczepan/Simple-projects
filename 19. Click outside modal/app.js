const buttons = document.querySelectorAll(".cards button");
const innerModal = document.querySelector(".modal-inner");
const outerModal = document.querySelector(".modal-outer");

function handleButtonClick(e) {
  const card = e.target.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const name = card.querySelector("h2").textContent;
  const desc = card.dataset.description;
  innerModal.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      "200",
      "600"
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
  outerModal.classList.add("open");
}

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

function closeModal() {
  outerModal.classList.remove("open");
}

outerModal.addEventListener("click", (e) => {
  isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
