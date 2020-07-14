const days = document.querySelector(".days");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const timePrefix = (time) => {
  if (time < 10) return `0${time}`;
  else return time;
};

const updateDOM = (d, h, min, sec) => {
  days.textContent = timePrefix(d);
  hours.textContent = timePrefix(h);
  minutes.textContent = timePrefix(min);
  seconds.textContent = timePrefix(sec);
};

const updateCountdown = () => {
  const currentTime = new Date();
  const timeleft = nextYear - currentTime;

  const d = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeleft / (1000 * 60 * 60)) % 60);
  const min = Math.floor((timeleft / (1000 * 60)) % 60);
  const sec = Math.floor((timeleft / 1000) % 60);

  updateDOM(d, h, min, sec);
};

const countdown = setInterval(updateCountdown, 1000);
