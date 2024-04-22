import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';

const heroSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [ Pagination ],
  watchSlidesProgress: true,
  slideActiveClass: 'hero__item--visible',

  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__point',
    bulletActiveClass: 'hero__point--active',
    renderBullet: (index, className) => `<li class="${className}">${index + 1}</li>`,
    clickable: true,
  },
});

const toursSwiper = new Swiper('.tours__swiper', {
  direction: 'horizontal',
  modules: [ Navigation ],
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
    disabledClass: 'tours__button-disabled'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const trainingSwiper = new Swiper('.training__swiper', {
  direction: 'horizontal',
  modules: [ Navigation ],
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
    disabledClass: 'training__button-disabled'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 2
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  modules: [ Navigation ],
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
    disabledClass: 'reviews__button-disabled'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 120,
    }
  }
});

export { heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper };
