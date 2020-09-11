const buttons = document.querySelectorAll(".btn");

const checkTarget = (e) => {
  const box = e.target.parentElement.parentElement;
  const answer = box.querySelector(".answer");
  answer.classList.toggle("open");
};

buttons.forEach((button) => {
  button.addEventListener("click", checkTarget);
});
