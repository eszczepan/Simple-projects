const nameArray = ['Lusia', 'Nata', 'Ellie', 'Eleni'];
const btn = document.querySelector('button');
const div = document.querySelector('div');
const h1 = document.createElement('h1');
div.appendChild(h1)

function handleClick() {
  const number = Math.floor(Math.random() * nameArray.length);
  const name = nameArray[number];
  if (h1.textContent === name) {
    handleClick();
  } else h1.textContent = name;
}

btn.addEventListener('click', handleClick)