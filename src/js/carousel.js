// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const carouselContainer = document.getElementById("cr_wrapper")
// const carouselInner = document.getElementById("carousel_inner");
// let cardWidth = document.querySelector('.cr_card').clientWidth;


// let cardPosition = 0;

// // listener
// nextBtn.addEventListener('click', () => handleNextClick());
// prevBtn.addEventListener('click', () => handlePrevClick());

// //  move the carouselInner container
// function moveCardContainer() {
//     carouselInner.style.transform = `translateX(${cardPosition}px)`;
// }

// // previous button 
// const handlePrevClick = () => {
//     cardPosition = cardPosition + (cardWidth + 15); //  margin-right card
//     console.log(cardPosition);
//     if (cardPosition >= 0) {
//         prevBtn.classList.add("hide");
//         cardPosition = 0;
//     } else {
//         nextBtn.classList.remove("hide");
//         prevBtn.classList.remove("hide");
//         moveCardContainer();
//     }
// }

// //next button 
// const handleNextClick = () => {
//     cardPosition = cardPosition - (cardWidth + 15); //  margin-right card
//     console.log(cardPosition);
//     if(cardPosition == -2272){
//         nextBtn.classList.add("hide");
//     }
//     if (cardPosition == -2556) {
//         cardPosition = 0;
//         // moveCardContainer();
//     } else {
//         prevBtn.classList.remove("hide");
//         moveCardContainer();
//     }
// }



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
    },
});