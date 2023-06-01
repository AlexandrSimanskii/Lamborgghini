const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true /* Круговая система */,
  speed: 1000 /* скорость пролистования */,
  effect: "slids",
  // effect:"flip", /* Переворот карточки. */
  // effect:"fade", /* Расстворение */
  // effect: "cards", /* Карты */
  // effect: "cube", /* Кубик */
  // effect:"coverflow", /* Что-то типо страниц книги или ...красота */

  slidesPerView: 2 /* По сколько карточек показывать */,
  // centeredSlides:true, /* При slidesPerView покажет центральную и половинки по бокам */
  // slidesPerGroup:2,

  // initialSlide:2, /*  С какого слайда начинать показывать */
  freeMode: true /* Не долистывает карты автоматически */,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",

    clickable: true /*  Можно листать погинацией */,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Автоматическое пролистывание слайдера
  //   autoplay: {
  //     delay: 2000,
  //   },
  breakpoints: {
    951: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    0: {
      spaceBetween: 5,
      slidesPerView: 1,
    },
  },
});

