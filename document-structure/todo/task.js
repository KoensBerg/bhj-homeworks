// — — — — — — — — — — — — — — — — — —
// Задача 2 – Простой список дел
// — — — — — — — — — — — — — — — — — —

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

// настроим ввод новой задачи
tasksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewTask();
})


// — — — — — — — — — — — — — — — — — —
// Функция создания новой задачи
// — — — — — — — — — — — — — — — — — —

function createNewTask() {
  const newTask = document.createElement('div');

  // создадим новую задачу
  newTask.classList.add('task');
  newTask.innerHTML = `
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
  `;

  // добавим новую задачу в начало списка
  tasksList.insertAdjacentElement('afterBegin', newTask);

  // очистим поле ввода
  taskInput.value = '';

  // настроим удаление созданной задачи
  const taskRemove = newTask.lastElementChild;
  
  taskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    newTask.remove();
  });
}