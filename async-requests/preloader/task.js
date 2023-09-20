const imgLoader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function () {
  imgLoader.classList.remove('loader_active');

  if (xhr.status = 200) {
    const valute = JSON.parse(xhr.response).response.Valute;

    for (let i = 0; i < Object.entries(valute).length; i++) {
      const CharCode = Object.entries(valute)[i][1].CharCode;
      const Value = Object.entries(valute)[i][1].Value;

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
  } else {
    console.log(`Ошибка запроса данных: ${xhr.status}`);
  }
}