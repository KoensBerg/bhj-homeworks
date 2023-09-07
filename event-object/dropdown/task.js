// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Выпадающие списки
// — — — — — — — — — — — — — — — — — — — — — — —

const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownLists = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

let counter = 0;


// Раскрываем и закрываем выпадающий список (их может быть несколько)
for (let i = 0; i < dropdownValues.length; i++) {
  let dropdownValue = dropdownValues[i];

  dropdownValue.addEventListener('click', (event) => {
    if (counter % 2)
      closeDropdown();
    else {
      closeDropdown();
      dropdownValue.nextElementSibling.className += " dropdown__list_active";
    }

    event.preventDefault();			// предотвращаем действие по умолчанию
    counter++;
  });
}


// Выбор элемента из выпадающего списка
for (let i = 0; i < dropdownItems.length; i++) {
  let item = dropdownItems[i];

  item.addEventListener('click', (event) => {
    closeDropdown();
    item.closest('ul').previousElementSibling.textContent = item.textContent;
    event.preventDefault();			// предотвращаем действие по умолчанию
    counter++;
  });
}


// функция закрывает все выпадающие списки
function closeDropdown() {
  dropdownLists.forEach(e => e.className = "dropdown__list");
}