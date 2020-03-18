const user = (name, age) => {
  let userName = name;
  let userAge = age;

  function showMessage() {
    document.body.textContent = `Hey ${userName}, ${userAge >= 18 ? 'You can buy a beer' : 'You cannot buy a beer'}`
  }
  return showMessage
}

const szcz = user('Szczeps', 15);
szcz()