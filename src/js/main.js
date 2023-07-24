import './carousel';
import './card';
import './loadGraph';
import './filterlist';
document.addEventListener("DOMContentLoaded", () => {

    const burgerMenu = document.getElementById("burger_menu");
    const sideMenu = document.getElementById("side_bar");
    const sideNavItems = document.getElementById("menu");

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
});
