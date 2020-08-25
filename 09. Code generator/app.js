const btn = document.querySelector("button");
const chars =
  "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@$?_-";

function generateCode() {
  const oldh1 = document.querySelector("h1");
  if (oldh1) {
    oldh1.remove();
  }
  const h1 = document.createElement("h1");
  for (let i = 0; i < 13; i++) {
    const index = Math.floor(Math.random() * chars.length);
    h1.textContent += chars[index];
  }
  document.body.appendChild(h1);
}

btn.addEventListener("click", generateCode);
