// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 2 – Ротатор рекламы
// — — — — — — — — — — — — — — — — — — — — — — —

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 1;
let delay = null;
let intervalID = null;

function changeString() {
  clearInterval(intervalID);

  rotatorCases.forEach(e => e.classList.remove('rotator__case_active'));
  rotatorCases[counter].classList.add('rotator__case_active');
  rotatorCases[counter].style.color = rotatorCases[counter].dataset.color;

  if (counter === (rotatorCases.length - 1)) counter = 0;  
  else counter++;

  delay = rotatorCases[counter].dataset.speed;
  intervalID = setInterval(changeString, delay);
}

intervalID = setInterval(changeString, delay);