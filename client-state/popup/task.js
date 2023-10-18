// — — — — — — — — — — — — — — — — — — — —
// Задача 2 – Всплывающее один раз окно
// — — — — — — — — — — — — — — — — — — — —

const subscribe = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');


// покажем окно 'subscribe'
showSubscribe();


// закроем окно 'subscribe'
modalClose.addEventListener('click', () => {
  subscribe.classList.remove('modal_active');
  document.cookie = 'subscribe=closed';
});


// Функция показывает окно 'subscribe'
function showSubscribe() {
  // поищем куку 'subscribe'
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(part => part.startsWith('subscribe'));
  
  let value = '';

  if (cookie) {
    // если кука существует, найдём её значение
    value = cookie.substring('subscribe='.length);
  }

  // если значение не 'closed', покажем окно 'subscribe'
  if (value !== 'closed') {
    subscribe.classList.add('modal_active');
  }
}