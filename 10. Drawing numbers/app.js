const minInput = document.querySelector('.min');
const maxInput = document.querySelector('.max');
const span = document.querySelector('span');


const numberRandom = (e) => {
  e.preventDefault();
  const min = minInput.value;
  const max = maxInput.value;
  span.textContent = Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('button').addEventListener('click', numberRandom)