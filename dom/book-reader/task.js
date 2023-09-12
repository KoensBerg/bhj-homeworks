const fontSizeElements = Array.from(document.querySelectorAll('.font-size'));
const bookContentElement = document.querySelector('.book__content');

for (let i = 0; i < fontSizeElements.length; i++) {
  fontSizeElements[i].addEventListener('click', (event) => {
    event.preventDefault();			// предотвращаем действие по умолчанию
    fontSizeElements.forEach(e => e.classList.remove('font-size_active'));
    fontSizeElements[i].classList.add('font-size_active');
    bookContentElement.className = 'book__content';

    const size = fontSizeElements[i].dataset.size;

    if (size === 'small') bookContentElement.className = 'book__content book_fs-small';
    else if (size === 'big') bookContentElement.className = 'book__content book_fs-big';
    else bookContentElement.className = 'book__content';
  })
}