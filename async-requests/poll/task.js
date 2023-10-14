// — — — — — — — — — — — — — — — — — — — — —
// Задача 2 – Опрос с выбором результатов
// — — — — — — — — — — — — — — — — — — — — —

const pollTitle = document.getElementById('poll__title');  // заголовок опроса
const pollAnswers = document.getElementById('poll__answers');  // блок с ответами

function newRequest() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.send();

  xhr.onload = function () {
    if (xhr.status = 200) {
      const newPoll = JSON.parse(xhr.response);

      const title = newPoll.data.title;  // извлечём данные о заголовке опроса
      const answers = newPoll.data.answers; // извлечём данные о вариантах ответов

      pollTitle.textContent = '';
      pollAnswers.textContent = '';

      pollTitle.textContent = title;

      answers.forEach(answer => {
        const element = document.createElement('button');
        element.className = 'poll__answer';
        element.style = "margin-right: 5px";
        element.textContent = answer;

        pollAnswers.appendChild(element);

        element.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!');
          newRequest();  // запустим новый опрос
        })
      });
    }
  }
}

newRequest(); // запустим новый опрос