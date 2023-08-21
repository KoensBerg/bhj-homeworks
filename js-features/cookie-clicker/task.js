// — — — — — — — — — — — — — — — — — — — —
// Задача 2 -- Игра-кликер
// — — — — — — — — — — — — — — — — — — — —

// Найдём существующие html-элементы
const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

// Создадим новый html-элемент для вывода скорости клика
let divSpeed = document.createElement('div');
divSpeed.className = "clicker__status";
divSpeed.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span>';
cookieImg.before(divSpeed);

const clickerSpeed = document.getElementById("clicker__speed");

// Определим переменные
let currentCounter = clickerCounter.textContent;
let currentSpeed = clickerSpeed.textContent;
let startTime = new Date().getTime();
let currentTime = null;
let fullTimeInSeconds = null;

// Опишем действия по клику
cookieImg.onclick = function () {
  currentCounter = ++clickerCounter.textContent;

  currentTime = new Date().getTime();
  fullTimeInSeconds = (currentTime - startTime) / 1000;
  currentSpeed = fullTimeInSeconds / currentCounter;

  clickerSpeed.textContent = currentSpeed.toFixed(2);

  if (currentCounter % 2) {
    cookieImg.width = "300";
  } else {
    cookieImg.width = "200";
  }
}