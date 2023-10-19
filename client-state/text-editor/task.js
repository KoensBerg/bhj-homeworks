// — — — — — — — — — — — — — — — — —
// Задача 1 – Текстовый редактор
// — — — — — — — — — — — — — — — — —

const editor = document.getElementById('editor');
const reset = document.getElementById('reset');


// восстановим данные из localStorage
editor.value = localStorage.getItem('editor');


// запишем новые данные в localStorage
editor.addEventListener('input', () => { // либо 'change' (в зависимости от задачи)
  localStorage.setItem('editor', editor.value.trim());
});


// очистим форму и localStorage
reset.addEventListener('click', (e) => {
  e.preventDefault();
  editor.value = '';
  localStorage.removeItem('editor');
});
