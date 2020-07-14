const buttons = document.querySelectorAll('button');
let eventTime = '';
let event = ''



function handleButtons(e) {
  const id = e.target.id;
  if (id == 0) {
    eventTime = new Date('2021-01-01 00:00:00').getTime()
    event = 'New Year Eve 2021'
    console.log(eventTime)
  } else if (id == 1) {
    eventTime = new Date('2084-12-22 00:00:00').getTime()
    event = 'Winter of 2084'
  } else if (id == 2) {
    eventTime = new Date('2050-01-01 12:00:00').getTime()
    event = 'Colonization of Mars'
  } else if (id == 3) {
    eventTime = new Date('2022-01-01 00:00:00').getTime()
    event = 'New Year Eve 2021'
  }
  return start()
}

const start = () => {
  document.querySelector('h1').textContent = event
  setInterval(() => {
    const nowTime = new Date().getTime();
    const time = eventTime - nowTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor(time / 1000) % 60;
    document.querySelector('h1').textContent = event
    document.querySelector('h2').textContent = `Time left: ${days}d: ${hours < 10 ? '0' + hours : hours}h : ${minutes < 10 ? '0' + minutes : minutes}m : ${seconds < 10 > 0 ? '0' + seconds : seconds}s`
  }, 1000)
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtons)
})