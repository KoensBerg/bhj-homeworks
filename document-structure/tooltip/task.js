// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Всплывающая подсказка
// — — — — — — — — — — — — — — — — — — — — — — —

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

const linksWithTips = document.querySelectorAll('.has-tooltip');
linksWithTips[0].insertAdjacentElement('afterend', tooltip);

let activeLinkIndex = -1;

// настроим действие по клику
for (let i = 0; i < linksWithTips.length; i++) {
  linksWithTips[i].addEventListener('click', (e) => {
    e.preventDefault();

    if (linksWithTips[i] === activeLinkIndex) {
      tooltip.classList.remove('tooltip_active');
      activeLinkIndex = -1;
    } else {
      // получим координаты элемента с линком
      let left = linksWithTips[i].getBoundingClientRect().left;
      let bottom = linksWithTips[i].getBoundingClientRect().bottom;

      // активируем подсказку
      tooltip.style = `left: ${left}px; top: ${bottom}px`;
      tooltip.innerText = linksWithTips[i].title;
      tooltip.classList.add('tooltip_active');

      activeLinkIndex = linksWithTips[i];
    }
  });
}