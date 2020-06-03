const endpoint = "https://randomuser.me/api";
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionersBtn = document.getElementById("show_millioners");
const calculateWealthBtn = document.getElementById("calculate-wealth");

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

function addData(user) {
  data.push(user);
  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
    console.log(data);
  });
}

//Format number as money
function formatMoney(number) {
  return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
