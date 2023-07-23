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


    // loading graph section

    const coinsWrapper = document.getElementById('gph_rht_coins');
    const chartList = document.querySelectorAll('.chart');

    const getCoinId = (id) => {
        console.log('clicked =', id)
        chartList.forEach((chart) => {
            if (chart.getAttribute('data-content') == id) {
                chart.setAttribute("class", "candle_chart chart show");
            } else {
                chart.setAttribute("class", "candle_chart chart hide");
            }
        })
    }

    coinsWrapper.addEventListener('click', (e) => {
        const item = e.target.closest('.gph_rht_coins_itm');
        if (item != null) {
            const id = item.dataset.id;
            getCoinId(id);
        }
    })


    // filter functionalities
    const listItems = document.querySelectorAll('.act_list_item')
    const filterList = document.getElementById('act_coin_list');
    filterList.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.closest('.act_coin_item')) {
            if (e.target.getAttribute('data-link') === "all") {
                listItems.forEach((items) => {
                    items.style.display = "block";
                })
            } else {
                listItems.forEach((items) => {
                    items.style.display = "none";
                })
                const getLink = e.target.getAttribute('data-link');
                const getList = document.querySelectorAll(`#${getLink}`)
                getList.forEach((list) => {
                    list.style.display = "block";
                })

            }
        }
    })



    // swiper
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

});
