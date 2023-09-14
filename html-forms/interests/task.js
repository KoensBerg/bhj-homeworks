// — — — — — — — — — — — — — — — — — —
// Задача 2 – Дерево интересов
// — — — — — — — — — — — — — — — — — —

const checkboxes = document.querySelectorAll('.interest__check');

// слушаем события флагов
for (let i = 0; i < checkboxes.length; i++) {
  const currentCheckbox = checkboxes[i];

  currentCheckbox.addEventListener('change', () => {
    checkTheBoxes(currentCheckbox);
  })
}

// — — — — — — — — — — — — — — — — — — – – –
// Функция проверяет и отмечает чекбоксы
// — — — — — — — — — — — — — — — — — — – – –
function checkTheBoxes(currentCheckbox) {
  const nearestParent = currentCheckbox.closest('.interest');
  const nearestParentChildren = Array.from(nearestParent.querySelectorAll('.interest__check'));

  // снимем отметки 'indeterminate'
  nearestParentChildren.forEach(e => e.indeterminate = false);

  // проставим checked у всех дочерних чекбоксов
  if (currentCheckbox.checked) nearestParentChildren.forEach(e => e.checked = true);
  else nearestParentChildren.forEach(e => e.checked = false);

  // определим текущий уровень (все чекбоксы ниже родительского)
  let currentLevel = nearestParent.closest('.interests_active');

  // определим, какие флаги поставить у родительских чекбоксов
  if (currentLevel) {
    const boxesOfCurrentLevel = Array.from(currentLevel.querySelectorAll('.interest__check'));
    const previousLevel = currentLevel.parentElement;
    const parentCheckbox = previousLevel.querySelectorAll('.interest__check')[0];

    // сформируем массив чекбоксов без флагов
    const checkedBoxes = boxesOfCurrentLevel.filter(e => e.checked === false);

    // проверим, есть ли на текущем уровне неотмеченные чекбоксы
    let checkAction = 0;
    
    if (checkedBoxes.length === boxesOfCurrentLevel.length)
      checkAction = 1;
    else if (checkedBoxes.length)
      checkAction = 2;
    else if (!checkedBoxes.length)
      checkAction = 3;

    // Функция отмечает родительские чекбоксы
    function chekPreviousLevel(parentCheckbox) {
      if (checkAction === 1) {
        parentCheckbox.indeterminate = false;
        parentCheckbox.checked = false;
      } else if (checkAction === 2) {
        parentCheckbox.indeterminate = true;
        parentCheckbox.checked = false;
      } else if (checkAction === 3) {
        parentCheckbox.indeterminate = false;
        parentCheckbox.checked = true;
      }

      // найдём родительский чекбокс более высокого уровня
      if (parentCheckbox.closest('.interests_active')) {
        const nextParentCheckbox = parentCheckbox.closest('.interests_active').previousElementSibling.querySelector('.interest__check');
        
        // перезапустим функцию для нового родительского чекбокса
        chekPreviousLevel(nextParentCheckbox);
      }
      return;
    }

    // запустим функцию, проставляющую флаги родительским чекбоксам
    chekPreviousLevel(parentCheckbox);
  }

  return;
}