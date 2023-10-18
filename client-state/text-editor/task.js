// — — — — — — — — — — — — — — — — —
// Задача 1 – Текстовый редактор
// — — — — — — — — — — — — — — — — —

const editor = document.getElementById('editor');

// восстановим данные из localStorage
restorEditor();

// запишем новые данные в localStorage
editor.addEventListener('input', () => { // либо 'change' (в зависимости от задачи)
  localStorage.editor = JSON.stringify(editor.value.trim());
});

// Функция восстанавливает данные из localStorage
function restorEditor() {
  if (localStorage.editor && localStorage.editor.length) {
    editor.value = JSON.parse(localStorage.editor);
  }
}