// — — — — — — — — — — — — — — — — — — — —
// Задача 3 -- Слайдер
// — — — — — — — — — — — — — — — — — — — —

const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderDots[0].className = "slider__dot slider__dot_active";

sliderArrowPrev.onclick = () => showSlidePrev();
sliderArrowNext.onclick = () => showSlideNext();

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => dotClick(i);
}

function dotClick(i) {
  sliderDots.forEach(elem => elem.className = "slider__dot");
  sliderDots[i].className = "slider__dot slider__dot_active";

  sliderItems.forEach(elem => elem.className = "slider__item");
  sliderItems[i].className += " slider__item_active";
}

function showSlidePrev() {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slider__item_active')) {
      sliderItems[i].className = "slider__item";

      if (i === 0) {
        sliderItems[sliderItems.length - 1].className += " slider__item_active";
      } else {
        sliderItems[i - 1].className += " slider__item_active";
      }

      return;
    }
  }
}

function showSlideNext() {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slider__item_active')) {
      sliderItems[i].className = "slider__item";

      if (i === (sliderItems.length - 1)) {
        sliderItems[0].className += " slider__item_active";
      } else {
        sliderItems[i + 1].className += " slider__item_active";
      }

      return;
    }
  }
}