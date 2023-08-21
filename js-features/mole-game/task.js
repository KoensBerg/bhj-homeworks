// — — — — — — — — — — — — — — — — — — — —
// Задача 3 -- Игра «Убей кротов»
// — — — — — — — — — — — — — — — — — — — —

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCount = dead.textContent;
let lostCount = lost.textContent;

for (let i = 1; i <= 9; ++i) {
  let name = "hole" + i;
  const holeID = document.getElementById(name);

  holeID.onclick = function () {
    if (holeID.classList.contains("hole_has-mole")) {
      deadCount++;
      dead.textContent = deadCount;
    } else {
      lostCount++;
      lost.textContent = lostCount;
    }

    if (deadCount === 5 || lostCount === 11) {
      victoryOrDefeat();
    }
  }
}

function victoryOrDefeat() {
  if (deadCount === 5 && lostCount < 11) {
    alert("Победа! Все кроты исстреблены " + "\u{1F642}");
  } else if (deadCount < 5 && lostCount === 11) {
    alert("Поражение. Кроты захватили город " + "\u{1F610}");
  }

  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
}