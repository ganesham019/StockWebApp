const burgerMenu = document.getElementById("burger_menu");
const sideMenu = document.getElementById("side_bar");
const sideNavItems = document.getElementById("menu");
const openMenu = document.getElementById("open_menu");
const arrowIcons = document.querySelectorAll(".menu_item_arrow");

burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle("collapsed-menu");
    sideNavItems.classList.toggle("ovf-scroll");
    document.querySelectorAll(".toggle_menu").forEach((element) => {
        element.classList.remove("toggle_menu");
    })
    document.querySelectorAll(".side_bar_title").forEach((element) => {
        element.classList.toggle("hide");
    })
    document.getElementById("side_logo_wrap_heading").classList.toggle("hide");
})

// arrowIcons.forEach((arrow) => {
//     arrow.addEventListener("click", (e) => {
//         e.target.classList.toggle("cng-dr");
//         const parentMenu = e.target.parentElement.parentElement;
//         parentMenu.classList.toggle("toggle_menu");
//     })
// })
