// swiper js
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
