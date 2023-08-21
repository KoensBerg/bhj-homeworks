// — — — — — — — — — — — — — — — — — — — —
// Задача 2 -- Игра-кликер
// — — — — — — — — — — — — — — — — — — — —

const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

cookieImg.onclick = function() {
  clickerCounter.textContent++;
  if (clickerCounter.textContent % 2) {
    cookieImg.width="300";
  } else {
    cookieImg.width="200";
  }
}