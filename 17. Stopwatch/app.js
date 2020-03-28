const timer = () => {
  const h1 = document.querySelector('h1');
  const btn = document.querySelector('button');
  h1.textContent = '00:00:00'
  let sec = 0;
  let min = 0;
  let hours = 0;
  btn.addEventListener('click', () => {
    h1.textContent = '00:00:00';
    sec = 0;
    min = 0;
    hours = 0;
  })
  const time = () => {
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++
    }
    if (min >= 60) {
      min = 0;
      hours++
    }
    h1.textContent = `${hours <= 0 ? '0'+hours : hours}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
  }
  return time
}

setInterval(timer(), 1000)