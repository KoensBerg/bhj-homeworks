// — — — — — — — — — — — — — — — — —
// Задача 1 – Текстовый редактор
// — — — — — — — — — — — — — — — — —

const editor = document.getElementById('editor');
const reset = document.getElementById('reset');


// восстановим данные из localStorage
restorEditor();


// запишем новые данные в localStorage
editor.addEventListener('input', () => { // либо 'change' (в зависимости от задачи)
  localStorage.setItem('editor', JSON.stringify(editor.value.trim()));
});


// очистим форму и localStorage
reset.addEventListener('click', (e) => {
  e.preventDefault();
  editor.value = '';
  delete localStorage.editor;
});


// Функция восстанавливает данные из localStorage
function restorEditor() {
  if (localStorage.editor) {
    try {
      editor.value = JSON.parse(localStorage.getItem('editor'));
    } catch(e) {
      return null;
    }
  }
}
