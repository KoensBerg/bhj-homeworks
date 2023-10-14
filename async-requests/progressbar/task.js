// — — — — — — — — — — — — — — — — — — — — —
// Задача 3 – Загрузка больших файлов
// — — — — — — — — — — — — — — — — — — — — —

const formElement = document.getElementById('form');  // форма
const progressBar = document.getElementById('progress');  // индикатор прогресса

formElement.addEventListener('submit', (e) => {
  e.preventDefault();  // предотвращаем действие по умолчанию

  // формируем новый запрос
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  // передаём данные формы
  const formData = new FormData(formElement);

  // обновляем индикатор прогресса
  xhr.upload.onprogress = (event) => {
    progressBar.value = event.loaded / event.total;
  };

  // отслеживаем результат (вариант 1)
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      console.log('Файл успешно загружен');
    }
  });

  // отслеживаем результат (вариант 2)
  xhr.onloadend = function () {
    if (xhr.status == 201) {
      console.log('xhr.response:', xhr.response);
    } else {
      console.log("Ошибка " + this.status);
    }
  };

  // отправляем запрос
  xhr.send(formData);
});