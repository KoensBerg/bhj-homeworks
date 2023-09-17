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

  if (taskInput.value) {
    createNewTask();
  }
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
  localStorage.clear();
  localStorage.setItem('tasksList.innerHTML', tasksList.innerHTML);
}


// — — — — — — — — — — — — — — — — — —
// Функция восстановления задач из localStorage
// — — — — — — — — — — — — — — — — — —
function recreateTaskList() {
  if (localStorage['tasksList.innerHTML']) {
    tasksList.innerHTML = localStorage['tasksList.innerHTML'];
  }
  
  if (tasksList.children.length) {
    const tasks = document.querySelectorAll('.task');

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].lastElementChild.addEventListener('click', (e) => {
        e.preventDefault();
        tasks[i].remove();
        updateLocalStorage();
      });
    }
  }
}