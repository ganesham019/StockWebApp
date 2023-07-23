// document.addEventListener("DOMContentLoaded", () => {
//   const coinsWrapper = document.getElementById('gph_rht_coins');
//   const chartList = document.querySelectorAll('.chart');

//   const getCoinId = (id) => {
//     console.log('clicked =', id)
//     chartList.forEach((chart) => {
//       if (chart.getAttribute('data-content') == id) {
//         chart.setAttribute("class", "candle_chart chart show");
//       } else {
//         chart.setAttribute("class", "candle_chart chart hide");
//       }
//     })
//   }

//   coinsWrapper.addEventListener('click', (e) => {
//     const item = e.target.closest('.gph_rht_coins_itm');
//     if (item != null) {
//       const id = item.dataset.id;
//       getCoinId(id);
//     }
//   })
// });
