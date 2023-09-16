// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 – Всплывающая подсказка
// — — — — — — — — — — — — — — — — — — — — — — —

let tooltip = document.createElement('div');
tooltip.classList.add("tooltip");

const hasTooltips = document.querySelectorAll('.has-tooltip');
hasTooltips[0].insertAdjacentElement("afterend", tooltip);

// активируем подсказку
for (let i = 0; i < hasTooltips.length; i++) {
  hasTooltips[i].addEventListener('mouseover', () => {

    // получим координаты элемента
    let left = hasTooltips[i].getBoundingClientRect().left;
    let bottom = hasTooltips[i].getBoundingClientRect().bottom;

    tooltip.style = `left: ${left}px; top: ${bottom}px`;
    tooltip.classList.add("tooltip_active");
    tooltip.innerText = hasTooltips[i].title;
  });
}


// деактивируем подсказку
for (let i = 0; i < hasTooltips.length; i++) {
  hasTooltips[i].addEventListener('mouseout', () => {
    tooltip.classList.remove("tooltip_active");
  });
}