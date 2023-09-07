// — — — — — — — — — — — — — — — — — — —
// Задача 3 – Управление вкладками
// — — — — — — — — — — — — — — — — — — —

// Предположим, что навигаций на странице может быть несколько
const firstNaviTabs = Array.from(document.querySelector('#tabs1').querySelectorAll('.tab'));
const firstNaviTabContens = Array.from(document.querySelector('#tabs1').querySelectorAll('.tab__content'));

// Логика клика по вкладке
for (let i = 0; i < firstNaviTabs.length; i++) {
  firstNaviTabs[i].addEventListener('click', () => {
    getNonActive();
    firstNaviTabs[i].className = 'tab tab_active';
    firstNaviTabContens[i].className = 'tab__content tab__content_active';
  });
}

// Делаем все вкладки неактивными
function getNonActive () {
  firstNaviTabs.forEach(e => e.className = 'tab');
  firstNaviTabContens.forEach(e => e.className = 'tab__content');
}