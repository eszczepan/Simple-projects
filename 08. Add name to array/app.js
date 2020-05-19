const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');
const names = [];

function addToArray(e) {
  e.preventDefault();
  if (input.value.length) {
    for (name of names) {
      if (name === input.value) {
        alert('This name is already in array')
        return input.value = ''
      }
    }
    names.push(input.value)
    input.value = ''
    div.textContent = names
  }
}

btn.addEventListener('click', addToArray)