import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiperSm = new Swiper(".swiper-sm", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: ".swiper-sm-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-sm-button-next",
    prevEl: ".swiper-sm-button-prev",
  },
});

const swiperLg = new Swiper(".swiper-lg", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 48,

  // If we need pagination
  pagination: {
    el: ".swiper-lg-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-lg-button-next",
    prevEl: ".swiper-lg-button-prev",
  },
});

const smCardSwiper = new Swiper(".sm-cards-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

const lifeStyleSwiper = new Swiper(".life-style-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".life-style-button-next",
    prevEl: ".life-style-button-prev",
  },
});

const styleProjectSwiper = new Swiper(".style-project-swiper", {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

const articlesSwiper = new Swiper(".articles-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});
