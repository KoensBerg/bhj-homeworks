// — — — — — — — — — — — — — — — — — — — —
// Задача 1 -- Таймер обратного отсчёта
// — — — — — — — — — — — — — — — — — — — —

const timer = document.getElementById('timer');

// Установим первоначальное значение таймера
let setHours = 0;
let setMinutes = 0;
let setSeconds = 59;

const TIME_LIMIT = (setHours * 3600 + setMinutes * 60 + setSeconds);
// либо:   const TIME_LIMIT = timer.textContent

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

timer.textContent = formatTime(timeLeft);
startTimer();

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      alert('Вы победили в конкурсе!');
      clearInterval(timerInterval);
    } else {
      timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    timer.textContent = formatTime(timeLeft);
    }
  }, 1000);
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}

const cardElement = document.querySelector('.card');
cardElement.style.width = '405px';