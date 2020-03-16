const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const showAdviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

let options = [
  'You gotta work harder',
  'Demand more',
  'Push forward',
  'Dont stop'
];

function addOption(e) {
  e.preventDefault();
  if (input.value) {
    for (option of options) {
      if (option === input.value) {
        alert('This possibility is in memory already')
        input.value = '';
      }
    }
    options.push(input.value)
    input.value = '';
  }
}

function resetArray(e) {
  e.preventDefault();
  options = [];
}

function showAdvice() {
  index = Math.floor(Math.random() * options.length);
  if (h1.textContent === options[index]) return showAdvice()
  h1.textContent = options[index]
}

function showOptions() {
  alert(options.join(' , '))
}

addBtn.addEventListener('click', addOption);
resetBtn.addEventListener('click', resetArray);
showAdviceBtn.addEventListener('click', showAdvice);
optionsBtn.addEventListener('click', showOptions);