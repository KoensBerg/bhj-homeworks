// — — — — — — — — — — — — — — — — — — —
// Задача 3 – Управление вкладками
// — — — — — — — — — — — — — — — — — — —

// Исходим из того, что на странице может быть несколько блоков с навигацией

const firstNaviTabs = Array.from(document.querySelector('#tabs1').querySelectorAll('.tab'));
const firstNaviTabContens = Array.from(document.querySelector('#tabs1').querySelectorAll('.tab__content'));


for (let i = 0; i < firstNaviTabs.length; i++) {
  firstNaviTabs[i].addEventListener('click', () => {
    firstNaviTabs.forEach(e => e.className = 'tab');
    firstNaviTabs[i].className = 'tab tab_active';

    firstNaviTabContens.forEach(e => e.className = 'tab__content');
    firstNaviTabContens[i].className = 'tab__content tab__content_active';
  });
}