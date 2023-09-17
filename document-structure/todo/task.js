// — — — — — — — — — — — — — — — — — —
// Задача 2 – Простой список дел
// — — — — — — — — — — — — — — — — — —

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

// ввод задачи через Enter
taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && taskInput.value) createNewTask();
});

// ввод через кнопку "Добавить"
tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if (taskInput.value) createNewTask();
});


// — — — — — — — — — — — — — — — — — —
// Функция создаёт новую задачу
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