// — — — — — — — — — — — — — — — — —
// Задача 3 – Авторизация
// — — — — — — — — — — — — — — — — —

// форма авторизации
const signinWrapper = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');

// блок приветствия
const welcome = document.getElementById('welcome');
const userID = document.getElementById('user_id');


// — — — — — — — — — — — — — — — — — — — — —
// Восстановим 'user_id' из localStorage
// — — — — — — — — — — — — — — — — — — — — —
idRestore();


// — — — — — — — — — — — — — — — — — — — — —
// Отправим данные авторизации на сервер
// — — — — — — — — — — — — — — — — — — — — —
signinBtn.addEventListener('click', (e) => {
  e.preventDefault();  // предотвращаем действие по умолчанию

  // формируем новый запрос
  const xhr = new XMLHttpRequest();
  xhr.open('POST', "https://students.netoservices.ru/nestjs-backend/auth", true);

  // передаём данные формы
  const formData = new FormData(signinForm);

  // отслеживаем результат
  xhr.onloadend = function () {
    if (xhr.status == 201) {
      console.log('xhr.response:', xhr.response);
      const responseParse = JSON.parse(xhr.response);

      // если авторизация прошла успешно
      if (responseParse.success) {
        localStorage.user_id = responseParse.user_id;  // запомним user_id
        signinWrapper.classList.remove('signin_active');  // скроем форму авторизации
        welcome.classList.add('welcome_active');  // покажем блок приветствия
        userID.textContent = responseParse.user_id;  // укажем user_id в форме приветствия
      } else {
        alert('Неверный логин/пароль');
      }
    } else {
      console.log("Ошибка " + this.status);
    }
  };

  xhr.send(formData);  // отправим запрос на сервер
  signinForm.reset();  // очистим форму авторизации
});


// — — — — — — — — — — — — — — — — — — — — — — — — — —
// Функция восстанавливает 'user_id' из localStorage
// — — — — — — — — — — — — — — — — — — — — — — — — — —
function idRestore() {
  if (localStorage.user_id) {
    signinWrapper.classList.remove('signin_active');  // скроем форму авторизации
    welcome.classList.add('welcome_active');  // покажем блок приветствия
    userID.textContent = localStorage.user_id;  // укажем user_id в форме приветствия
  } else {
    signinWrapper.classList.add('signin_active');  // покажем форму авторизации
  }
}