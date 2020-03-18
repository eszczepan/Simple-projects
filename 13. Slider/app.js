const slideList = [{
    img: 'imgs/img1.jpg',
    text: 'First slide'
  },
  {
    img: 'imgs/img2.jpg',
    text: 'Second slide'
  },
  {
    img: 'imgs/img3.jpg',
    text: 'Third slide'
  }
]

const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dot span')]

const time = 2000;
let active = 0

function changeDot() {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

function changeSlide() {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text
  changeDot()
}

function keyChangeSlide(e) {
  clearInterval(indexInterval);
  if (e.keyCode === 37) {
    active--;
    if (active < 0) {
      active = slideList.length - 1;
    }
  } else if (e.keyCode === 39) {
    active++;
    if (active === slideList.length) {
      active = 0;
    }
  }
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
  indexInterval = setInterval(changeSlide, time)
}

let indexInterval = setInterval(changeSlide, time)

window.addEventListener('keydown', keyChangeSlide)