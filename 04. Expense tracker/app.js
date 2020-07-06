const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const btn = document.querySelector(".btn");
let income = 0;
let outcome = 0;

const invalidInput = (textVal, amountVal) => {
  if (amountVal === "" || amountVal === 0) {
    console.log("enter amount");
    amount.classList.add("invalidInput");
  }
  if (textVal === "" || amountVal === 0) {
    console.log("enter text");
    text.classList.add("invalidInput");
  }
};

const updateBalance = (classe, value) => {
  money = parseInt(value);
  if (classe === "plus") {
    income += money;
    moneyPlus.textContent = `$${income}`;
  } else {
    outcome += money;
    moneyMinus.textContent = `$${outcome}`;
  }

  balance.textContent = `${income - outcome}$`;
};

const clearInputs = () => {
  text.value = "";
  amount.value = "";
  text.classList.remove("invalidInput");
  amount.classList.remove("invalidInput");
};

const addElement = (textVal, amountVal, classe) => {
  const newItem = document.createElement("li");
  newItem.classList.add(classe);
  newItem.textContent = `${textVal}`;

  const span = document.createElement("span");
  span.textContent = `$${amountVal}`;
  newItem.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "x";
  newItem.appendChild(deleteBtn);

  list.appendChild(newItem);
  updateBalance(classe, amountVal);
  clearInputs();
};

const addTransaction = (e) => {
  e.preventDefault();

  let amountVal = amount.value;
  const textVal = text.value;

  if (textVal !== "" && amountVal > 0) {
    const plus = "plus";
    return addElement(textVal, amountVal, plus);
  } else if (textVal !== "" && amountVal < 0) {
    const minus = "minus";
    amountVal = amountVal.substr(1);
    return addElement(textVal, amountVal, minus);
  } else {
    invalidInput(textVal, amountVal);
    return;
  }
};

btn.addEventListener("click", addTransaction);
