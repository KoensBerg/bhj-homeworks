// — — — — — — — — — — — — — — — — — —
// Задача 3 – Корзина товаров
// — — — — — — — — — — — — — — — — — —

const products = document.querySelectorAll('.product'); // карточки
const cartProducts = document.querySelector('.cart__products'); // корзина


// — — — — — — — — — — — — — — — — — —
// Добавим товар в корзину
// — — — — — — — — — — — — — — — — — —
for (let i = 0; i < products.length; i++) {
  products[i].querySelector('.product__add').addEventListener('click', (e) => {
    e.preventDefault();
    const dataID = products[i].dataset.id;
    const quantityValue = products[i].querySelector('.product__quantity-value');
    const productImg = products[i].querySelector('img');

    // создадим карточку товара для корзины
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = dataID;

    // клонируем изображение товара
    const cloneImg = productImg.cloneNode(true);
    cloneImg.className = 'cart__product-image';

    // определим количество товара
    const countElement = document.createElement('div');
    countElement.classList.add('cart__product-count');
    countElement.textContent = quantityValue.textContent;

    // добавим элементы в карточку
    cartProduct.appendChild(cloneImg);
    cartProduct.appendChild(countElement);

    // если в корзине есть какие-то товары
    if (cartProducts.children.length) {
      let addedElement = null;

      // проверим, есть ли в корзине добавляемый товар
      Array.from(cartProducts.children).forEach(item => {

        // если добавляемый товар уже есть в корзине
        if (item.dataset.id === dataID) {
          addedElement = item;
          
          let currentQuentity = +(addedElement.querySelector('.cart__product-count').textContent);
          let addedQuentity = +(quantityValue.textContent);
          
          // добавим дополнительное количество товара
          addedElement.querySelector('.cart__product-count').textContent = currentQuentity + addedQuentity;
        }
      });

      // если товар не найден в корзине
      if (!addedElement) cartProducts.appendChild(cartProduct);
    } 
    // если корзина пустая
    else cartProducts.appendChild(cartProduct);
  })
}


// — — — — — — — — — — — — — — — — — —
// Изменим количество единиц товара
// — — — — — — — — — — — — — — — — — —
for (let i = 0; i < products.length; i++) {
  let currentQuentity;
  const incControl = products[i].querySelector('.product__quantity-control_inc');
  const decControl = products[i].querySelector('.product__quantity-control_dec');
  const quantityValue = products[i].querySelector('.product__quantity-value');

  // увеличим количество единиц товара
  incControl.addEventListener('click', (e) => {
    e.preventDefault();
    currentQuentity = +(quantityValue.textContent);

    quantityValue.textContent = currentQuentity + 1;
  });

  // уменьшим количество единиц товара
  decControl.addEventListener('click', (e) => {
    e.preventDefault();
    currentQuentity = +(quantityValue.textContent);

    if (currentQuentity > 1)
    quantityValue.textContent = currentQuentity - 1;
  });
}