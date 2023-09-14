// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Хамовитый чат-бот
// — — — — — — — — — — — — — — — — — — — — — — —

const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

let intervalID;
const delay = 15000;  // задержка при неактивности пользователя

// определим фразы чат-бота
const chatbotMessages = [
  'Вы ещё ничего не купили, чтобы разговаривать с нами в подобном тоне!',
  'Кого ещё сюда принесло?',
  'Вы что, совесть на рынке потеряли?',
  'Все операторы заняты. Не пишите нам больше.',
  'Мы ничего не будем вам продавать.',
  'Я сегодня не в духе. Good buy :)',
  'Я ещё не проснулся. Позвоните завтра.',
  'Ну и заявы, дубина ты липецкая...',
  'И откуда же вы такие понаехали?',
  'С нищебродами не работаем.',
  'Как же вы мне надоели, глупые людишки...',
  'Не рановато ли для тупых сообщений?',
  'Тебя ведь Инна зовут? Наслышан...',
  'Хватит действовать мне на нервы!',
]

// определим вопросы чат-бота при простое
const chatbotQuestions = [
  'Чего молчим?',
  'Ещё что-нибудь интересует?',
  'Ну что, так и будем играть в молчанку?',
  'Блин, мне что, сутками новых вопросов ждать?',
  'Ну так что, будем общаться или глазки строить?',
  'Алло, говорите, вас не слышно!',
  'Ау, на галерке, уснули что ли?',
  'Может, что-нибудь напишем?',
  'Блин, как воды в рот набрали...>',
  'Алё, там есть кто живой?>',
]

// развернём окно чата
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
  input.focus();
});

// — — — — — — — — — — — — — — — — — — — — — — —
// Реализуем действие по нажатию на 'enter'
// — — — — — — — — — — — — — — — — — — — — — — —

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && input.value) {
    event.preventDefault();  // отменим действие по умолчанию

    // получим фразы пользователя и чат-бота
    const userMessage = input.value;
    const chatbotMessage = chatbotMessages[Math.floor(Math.random() * chatbotMessages.length)];

    // сообщение пользователя
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${calcCurrentTime()}</div>
        <div class="message__text">
          ${userMessage}
        </div>
      </div>
    `;

    // сообщение чат-бота
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${calcCurrentTime()}</div>
        <div class="message__text">
          ${chatbotMessage}
        </div>
      </div>
    `;

    // очистим поле ввода, скролл вниз
    input.value = '';
    scrollToLastMessage();
  }
})

// — — — — — — — — — — — — — — — — — — — — — — —
// Реализуем действие при отсутствии активности
// — — — — — — — — — — — — — — — — — — — — — — —

input.addEventListener('focus', () => {
  isNotMessages();
});

input.addEventListener('blur', () => {
  clearInterval(intervalID);
});

input.addEventListener('input', () => {
  clearInterval(intervalID);
  isNotMessages();
});

function isNotMessages() {
  intervalID = setInterval(() => {
    const chatbotQuestion = chatbotQuestions[Math.floor(Math.random() * chatbotQuestions.length)];

    // сообщение чат-бота
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${calcCurrentTime()}</div>
        <div class="message__text">
          ${chatbotQuestion}
        </div>
      </div>
    `;

    scrollToLastMessage();
  }, delay);
}

// — — — — — — — — — — — — — — — — — — — — — — —

// функция вычисляет текущее время
function calcCurrentTime() {
  const today = new Date();
  return (today.getHours() < 10 ? '0' + today.getHours() : today.getHours()) + ':' +
    (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());
}

// скролл до последнего сообщения
function scrollToLastMessage() {
  const allMessages = document.querySelectorAll('.message__text');
  const lastMessage = allMessages[allMessages.length - 1];
  lastMessage.scrollIntoView(top);
}