const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const btn = document.querySelector(".btn");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);
let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

const generateID = () => {
  return Math.floor(Math.random() * 10000000);
};

const generateTransactions = (transaction) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "plus" : "minus");
  item.innerHTML = `
  ${transaction.text}<span>${sign} ${Math.abs(
    transaction.amount
  )} zl</span><button class="delete-btn" onclick="deleteTransaction(${
    transaction.id
  })">x</button>
  `;
  list.appendChild(item);
};

const updateBalance = () => {
  const amounts = transactions.map((item) => item.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const outcome = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.textContent = `${total}PLN`;
  moneyPlus.textContent = `${income}PLN`;
  moneyMinus.textContent = `${outcome}PLN`;
};

const addTransaction = (e) => {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    console.log("error");
  } else {
    const item = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(item);
    generateTransactions(item);
    updateBalance();
    updateLocalStorage();
    text.value = "";
    amount.value = "";
  }
};

const deleteTransaction = (id) => {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  init();
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const init = () => {
  list.innerHTML = "";
  transactions.forEach(generateTransactions);
  updateBalance();
};

init();

form.addEventListener("submit", addTransaction);
