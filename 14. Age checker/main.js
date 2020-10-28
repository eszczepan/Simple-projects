const button = document.querySelector(".button");
const inputName = document.querySelector(".input-name");
const inputAge = document.querySelector(".input-age");

const user = (name, age) => {
  document.body.textContent = `Hey ${name}. ${
    age >= 18
      ? `You are ${age}, so you are allowed to buy a beer`
      : "You are under 18, so you cannot buy a beer"
  }`;
};

const handleButtonClick = (e) => {
  e.preventDefault();
  const name = inputName.value;
  const age = inputAge.value;
  if (name && age) {
    return user(name, age);
  }
};

button.addEventListener("click", handleButtonClick);
