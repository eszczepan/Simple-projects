const timer = () => {
  let sec = 0;
  const h1 = document.querySelector('h1')
  h1.textContent = `0 seconds`
  const oneSec = () => {
    sec++;
    h1.textContent = `${sec} seconds`;
  }
  return oneSec
}
// const start = timer()
setInterval(timer(), 1000)