// — — — — — — — — — — — — — — — — — —
// Задача 2 – Простой список дел
// — — — — — — — — — — — — — — — — — —

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

// восстановим задачи из localStorage
recreateTaskList();

// настроим ввод новой задачи
tasksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    createNewTask(taskValue);
  }
});


// — — — — — — — — — — — — — — — — — —
// Функция создания новой задачи
// — — — — — — — — — — — — — — — — — —
function createNewTask(taskValue) {
  const newTask = document.createElement('div');

  // создадим новую задачу
  newTask.classList.add('task');
  newTask.innerHTML = `
  <div class="task__title">
    ${taskValue}
  </div>
  <a href="#" class="task__remove">&times;</a>
  `;

  // добавим новую задачу в начало списка
  tasksList.insertAdjacentElement('afterBegin', newTask);

  // обновим localStorage
  updateLocalStorage();

  // очистим поле ввода
  taskInput.value = '';

  // настроим удаление созданной задачи
  const taskRemove = newTask.lastElementChild;

  taskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    newTask.remove();
    updateLocalStorage();
  });
}


// — — — — — — — — — — — — — — — — — —
// Функция обновления localStorage
// — — — — — — — — — — — — — — — — — —
function updateLocalStorage() {
  const tasksTitlesArray = [];
  const taskTitles = tasksList.querySelectorAll('.task__title');

  if (taskTitles.length > 0) {
    Array.from(taskTitles).forEach(e => tasksTitlesArray.unshift(e.innerText));
  }

  localStorage.setItem('tasksTitlesArray', tasksTitlesArray);
}


// — — — — — — — — — — — — — — — — — — — — — — —
// Функция восстановления задач из localStorage
// — — — — — — — — — — — — — — — — — — — — — — —
function recreateTaskList() {
  const tasksTitlesArray = localStorage.tasksTitlesArray.split(',');

  if (tasksTitlesArray.length) {
    tasksTitlesArray.forEach(e => createNewTask(e));
  }
}