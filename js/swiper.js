/* Initialize Swiper */
var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    dely: 2500,
  },
  loop: true,
});

var swiper = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});
