const endpoint = "https://randomuser.me/api";
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const sortBtn = document.getElementById("sort");
const showMillionersBtn = document.getElementById("show_millionaires");
const calculateWealthBtn = document.getElementById("calculate");

let data = [];

//Fetch random user and add Money
async function getRandomUser() {
  const res = await fetch(endpoint);
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}
//Double money function
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

//Sort function
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
//Filter millionaries function
function showMillionaries() {
  data = data.filter((user) => user.money >= 1000000);
  updateDOM();
}
//Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}
//Add data to an array
function addData(user) {
  data.push(user);
  updateDOM();
}
//Update DOM function
function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Format number as money
function formatMoney(number) {
  return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionersBtn.addEventListener("click", showMillionaries);
calculateWealthBtn.addEventListener("click", calculateWealth);
