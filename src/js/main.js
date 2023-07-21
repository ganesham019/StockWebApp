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

    // display section
    const menuItems = document.querySelectorAll('.menu_box');

    const showSection = (section) => {
        // all the section hiding
        const menus = document.querySelectorAll('.menus');
        menus.forEach((menu) => {
            if (menu.classList.contains('hide')) {
                menu.classList.add('active');
            } else {
                menu.classList.add('hide');
                menu.classList.remove('active');
            }
        });
        // remove the hide which selected menu
        const getSection = document.getElementById(section);
        getSection.classList.remove('hide');

    }


    const handleActiveMenu = (item) => {
        menuItems.forEach((menuitem) => {
            menuitem.classList.remove('active');
        });
        item.classList.add('active');
    }

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            let section = item.getAttribute("data-link");
            if (section != null) {
                showSection(section);
                handleActiveMenu(item)
            }
        })
    })
});
