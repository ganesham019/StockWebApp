
// document.addEventListener('DOMContentLoaded', () => {
//     const listItems = document.querySelectorAll('.act_list_item')

//     const filterList = document.getElementById('act_coin_list');

//     filterList.addEventListener('click', (e) => {
//         e.stopPropagation();
//         if (e.target.closest('.act_coin_item')) {
//             if (e.target.getAttribute('data-link') === "all") {
//                 listItems.forEach((items) => {
//                     items.style.display = "block";
//                 })
//             } else {
//                 listItems.forEach((items) => {
//                     items.style.display = "none";
//                 })
//                 const getLink = e.target.getAttribute('data-link');
//                 const getList = document.querySelectorAll(`#${getLink}`)
//                 getList.forEach((list) => {
//                     list.style.display = "block";
//                 })

//             }
//         }
//     })
// }
// );
