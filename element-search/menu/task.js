// — — — — — — — — — — — — — — — — — — — —
// Задача 2 -- Навигационное меню
// — — — — — — — — — — — — — — — — — — — —

const menuLinks = document.querySelectorAll('.menu__link');
const arrMenuLinks = Array.from(menuLinks);

const linkNearMenuSub = [];

arrMenuLinks.forEach((elem) => {
  if (elem.nextElementSibling &&
    elem.nextElementSibling.className === "menu menu_sub") {
    linkNearMenuSub.push(elem);
  }
});

linkNearMenuSub.forEach((elem) => elem.onclick = function () {
  elem.nextElementSibling.className += " menu_active";

  linkNearMenuSub.forEach((e) => {
    if (e !== elem)
      e.nextElementSibling.className = "menu menu_sub";
  });
  
  return false;
});