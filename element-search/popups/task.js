// — — — — — — — — — — — — — — — — — — — —
// Задача 1 -- Всплывающие окна
// — — — — — — — — — — — — — — — — — — — —

const modalMain = document.querySelector("#modal_main");
const modalClose = modalMain.querySelector(".modal__close");
const showSuccess = modalMain.querySelector(".show-success");
const modalSuccess = document.querySelector("#modal_success");

// Покажем окно modalMain
modalMain.className = "modal modal_active";

// Закроем окно modalMain
modalClose.onclick = function () {
  modalMain.className = "modal";
}

// Покажем кнопку "Хорошо сделано"
showSuccess.onclick = function () {
  modalSuccess.className = "modal modal_active";
}

// Закроем всплывающие окна
modalSuccess.onclick = function () {
  modalSuccess.className = "modal";
  modalMain.className = "modal";
}