
const bodyContainer = document.getElementById("body-section");

const menu = Array.from(document.querySelectorAll(".menu_box"));

let getHref;
// let getsection;

let currentIndex = 0;
menu.forEach((nav, index) => {
  nav.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.closest('.menu_item')) {
      bodyContainer.innerHTML = "";
      // let getHref = e.target.closest('.menu_item').dataset.link;
    }
  })
})




