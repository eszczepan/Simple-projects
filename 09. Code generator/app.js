const btn = document.querySelector('button');
const chars = 'ABCDEFGHIJMK0123456789'

function generateCode() {
  for (let i = 0; i < 10; i++) {
    const h1 = document.createElement('h1');
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * chars.length);
      h1.textContent += chars[index]
    }
    document.body.appendChild(h1)
  }
}

btn.addEventListener('click', generateCode)