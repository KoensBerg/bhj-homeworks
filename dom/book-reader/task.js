// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Онлайн-читалка
// — — — — — — — — — — — — — — — — — — — — — — —

const fontSizeElements = Array.from(document.querySelectorAll('.font-size'));
const controlColorElements = Array.from(document.querySelector('.book__control_color').querySelectorAll('a'));
const controlBackgroundElements = Array.from(document.querySelector('.book__control_background').querySelectorAll('a'));
const bookContentElement = document.querySelector('.book__content');


// Меняем размер шрифта
for (let i = 0; i < fontSizeElements.length; i++) {
  fontSizeElements[i].addEventListener('click', (event) => {
    event.preventDefault();			// предотвращаем действие по умолчанию

    fontSizeElements.forEach(e => e.classList.remove('font-size_active'));
    fontSizeElements[i].classList.add('font-size_active');
    
    bookContentElement.classList.remove('book_fs-small');
    bookContentElement.classList.remove('book_fs-big');

    const size = fontSizeElements[i].dataset.size;

    if (size === 'small') bookContentElement.classList.add('book_fs-small');
    else if (size === 'big') bookContentElement.classList.add('book_fs-big');
  })
}


// Меняем цвет текста
for (let i = 0; i < controlColorElements.length; i++) {
  controlColorElements[i].addEventListener('click', (event) => {
    event.preventDefault();			// предотвращаем действие по умолчанию

    controlColorElements.forEach(e => e.classList.remove('color_active'));
    controlColorElements[i].classList.add('color_active');
    
    bookContentElement.classList.remove('book_color-black');
    bookContentElement.classList.remove('book_color-gray');
    bookContentElement.classList.remove('book_color-whitesmoke');

    const textColor = controlColorElements[i].dataset.textColor;

    if (textColor === 'black') bookContentElement.classList.add('book_color-black');
    else if (textColor === 'gray') bookContentElement.classList.add('book_color-gray');
    else if (textColor === 'whitesmoke') bookContentElement.classList.add('book_color-whitesmoke');
  })
}


// Меняем цвет фона
for (let i = 0; i < controlBackgroundElements.length; i++) {
  controlBackgroundElements[i].addEventListener('click', (event) => {
    event.preventDefault();			// предотвращаем действие по умолчанию

    controlBackgroundElements.forEach(e => e.classList.remove('color_active'));
    controlBackgroundElements[i].classList.add('color_active');
    
    bookContentElement.classList.remove('book_bg-black');
    bookContentElement.classList.remove('book_bg-gray');
    bookContentElement.classList.remove('book_bg-white');

    const bgColor = controlBackgroundElements[i].dataset.bgColor;

    if (bgColor === 'black') bookContentElement.classList.add('book_bg-black');
    else if (bgColor === 'gray') bookContentElement.classList.add('book_bg-gray');
    else if (bgColor === 'white') bookContentElement.classList.add('book_bg-white');
  })
}