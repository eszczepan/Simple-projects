const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus hic corporis accusamus deleniti sunt libero voluptate, enim eveniet earum odit officiis magnam et assumenda dolorem maiores obcaecati repudiandae eius.';
const spnTxt = document.querySelector('.spnText');
const spnCursor = document.querySelector('.spnCursor');
let char = 0;

function typewriter() {
  if (char === txt.length) return clearInterval()
  spnTxt.textContent += txt[char]
  char++
}

function cursorToggle() {
  spnCursor.classList.toggle('active');
}

setInterval(typewriter, 80);
setInterval(cursorToggle, 400)