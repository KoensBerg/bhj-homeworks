// — — — — — — — — — — — — — — — — — — — — —
// Задача 2 – Опрос с выбором результатов
// — — — — — — — — — — — — — — — — — — — — —

const pollTitle = document.getElementById('poll__title');  // заголовок опроса
const pollAnswers = document.getElementById('poll__answers');  // блок с ответами


// запустим новый опрос
newRequest();


// — — — — — — — — — — — — — — — — — — —
// Функция отображает новый опросник
// — — — — — — — — — — — — — — — — — — —
function newRequest() {
  // запросим данные для нового опроса
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.send();

  // создадим опросник с вариантами ответов
  xhr.onload = function () {
    if (xhr.status === 200) {
      const newPoll = JSON.parse(xhr.response);

      const title = newPoll.data.title;  // извлечём данные о заголовке опроса
      const answers = newPoll.data.answers; // извлечём данные о вариантах ответов
      const vote = newPoll.id;  // извлечём данные об id опроса

      pollTitle.textContent = '';
      pollAnswers.innerHTML = '';

      pollTitle.textContent = title; // создадим заголовок опроса

      // заполним опросник вариантами ответов
      answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.className = 'poll__answer';
        answerButton.style = 'margin-right: 5px';
        answerButton.textContent = answer;

        pollAnswers.appendChild(answerButton);

        // настроим действие по клику на вариант ответа
        answerButton.addEventListener('click', () => {
          showStat(vote, index); // выведем результаты опроса
        });
      });
    } else {
      console.log(`Ошибка запроса данных: ${xhr.status}`);
    }
  }
}


// — — — — — — — — — — — — — — — — — — —
// Функция выводит результаты опроса
// — — — — — — — — — — — — — — — — — — —
function showStat(vote, index) {
  const xhr = new XMLHttpRequest;

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${vote}&answer=${index}`);

  xhr.onload = function () {
    if (xhr.status === 201) {
      const results = JSON.parse(xhr.response).stat;  // извлечём данные статистики

      pollAnswers.innerHTML = '';  // удалим кнопки опросника

      // выведем строки статистики
      results.forEach(result => {
        const statAnswer = result.answer;
        const statVotes = result.votes;

        const resultString = document.createElement('div');
        resultString.textContent = `﹡ ${statAnswer}: ${statVotes}`;

        pollAnswers.appendChild(resultString);
      });

      // добавим кнопку для запуска нового опроса
      const newRequestButton = document.createElement('button');
      newRequestButton.className = 'poll__answer';
      newRequestButton.style = 'margin: 20px 0';
      newRequestButton.textContent = 'Новый опрос';

      pollAnswers.appendChild(newRequestButton);

      // настроим действие кнопки
      newRequestButton.addEventListener('click', () => {
        newRequest(); // запустим новый опрос
      });
    } else {
      console.log(`Ошибка запроса данных: ${xhr.status}`);
    }
  }
}