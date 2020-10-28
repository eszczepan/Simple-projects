const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const div = document.querySelector(".tasks");

function addTask(e) {
  e.preventDefault();
  if (input.value) {
    li = document.createElement("li");
    li.textContent = input.value;
    removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList = "remove";
    li.appendChild(removeBtn);
    div.appendChild(li);
    input.value = "";
    removeBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  } else {
    alert("Type something in");
  }
}

addBtn.addEventListener("click", addTask);
