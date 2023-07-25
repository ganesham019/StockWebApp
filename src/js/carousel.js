
const { Swiper } = require('swiper');
const { Navigation } = require('swiper/modules');

//  Initialize Swiper
let swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    grabCursor: true,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});