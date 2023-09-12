// — — — — — — — — — — — — — — — — — — — — — — —
// Задача 1 Появление элементов
// — — — — — — — — — — — — — — — — — — — — — — —

const revealElements = Array.from(document.querySelectorAll('.reveal'));

for (let i = 0; i < revealElements.length; i++) {
  window.addEventListener('scroll', () => {
    const { top, bottom } = revealElements[i].getBoundingClientRect();

    if (top < window.innerHeight && bottom < window.innerHeight)
    revealElements[i].classList.add('reveal_active');
    
    if (top < 0 || bottom > window.innerHeight)
    revealElements[i].classList.remove('reveal_active');
  });
}