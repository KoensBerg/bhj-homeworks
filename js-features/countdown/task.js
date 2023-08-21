// — — — — — — — — — — — — — — — — — — — —
// Задача 1 -- Таймер обратного отсчёта
// — — — — — — — — — — — — — — — — — — — —

const timer = document.getElementById('timer');

// Установим первоначальное значение таймера
let setHours = 0;
let setMinutes = 0;
let setSeconds = 59;

const timerInitialValue = (setHours * 3600 + setMinutes * 60 + setSeconds);

// либо, если нужно подхватить значение из файла task.html:
// const timerInitialValue = timer.textContent

let timeLeft = timerInitialValue;
let intervalID = null;

timer.textContent = formatTime(timeLeft);
startTimer();

function startTimer() {
  intervalID = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(intervalID);
      alert('Вы победили в конкурсе!' + '\n\n' +
        'В качестве презента на Ваш компьютер будет загружена' + '\n' +
        ' книга Льва Толстого "Анна Каренина" в формате fb2 ' + '\u{1F607}');
      location.assign("http://tolstoy.ru/upload/iblock/144/anna-karenina.fb2");
    } else {
      timeLeft -= 1;
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