// — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Анимация загрузки данных
// — — — — — — — — — — — — — — — — — — — — —

const imgLoader = document.getElementById('loader');
const items = document.getElementById('items');


// восстановим данные из localStorage
recreateValutesList();


// отправим запрос на получение свежих курсов валют
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();


xhr.onload = function () {
  // если от сервера получен корректный ответ
  if (xhr.status === 200) {
    items.innerHTML = ''; // очистим старый список
    imgLoader.classList.remove('loader_active'); // удалим индикатор загрузки

    // извлечём данные о тикерах и курсах
    const valute = JSON.parse(xhr.response).response.Valute;

    for (let i = 0; i < Object.entries(valute).length; i++) {
      const CharCode = Object.entries(valute)[i][1].CharCode;
      const Value = Object.entries(valute)[i][1].Value;

      // создадим свежий список курсов валют
      createValutesList(CharCode, Value);
    }

    // обновим данные в localStorage
    updateLocalStorage();
  } else {
    console.log(`Ошибка запроса данных: ${xhr.status}`);
  }
}


// — — — — — — — — — — — — — — — — — — — — —
// Функция создания списка с курсами валют
// — — — — — — — — — — — — — — — — — — — — —
function createValutesList(CharCode, Value) {
  const itemCode = document.createElement('div');
  itemCode.classList.add('item__code');
  itemCode.textContent = CharCode;

  const itemValue = document.createElement('div');
  itemValue.classList.add('item__value');
  itemValue.textContent = Value;

  const itemCurrency = document.createElement('div');
  itemCurrency.classList.add('item__currency');
  itemCurrency.textContent = 'руб.';

  const item = document.createElement('div');
  item.classList.add('item');

  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurrency);

  items.appendChild(item);
}


// — — — — — — — — — — — — — — — — — —
// Функция обновления localStorage
// — — — — — — — — — — — — — — — — — —
function updateLocalStorage() {
  const exchangeRatesArray = [];
  const valutesList = items.querySelectorAll('.item');

  if (valutesList.length) {
    for (let i = 0; i < valutesList.length; i++) {
      const CharCode = valutesList[i].querySelector('.item__code').textContent;
      const Value = valutesList[i].querySelector('.item__value').textContent;

      exchangeRatesArray.push({ CharCode, Value });
    }

    localStorage.setItem('exchangeRatesArray', JSON.stringify(exchangeRatesArray));
  }
}


// — — — — — — — — — — — — — — — — — — — — —
// Функция восстановления из localStorage
// — — — — — — — — — — — — — — — — — — — — —
function recreateValutesList() {
  if (localStorage.exchangeRatesArray) {
    const exchangeRatesArray = JSON.parse(localStorage.exchangeRatesArray);

    if (exchangeRatesArray.length) {
      items.innerHTML = '';
      Array.from(exchangeRatesArray).forEach(e => createValutesList(e.CharCode, e.Value));
    }
  }
}