// Работа с burger-menu
const burger_menu = document.querySelector('.header__menu');
const site_nav = document.querySelector('.nav__items');

// window.addEventListener('resize', () => {
//   if (document.documentElement.clientWidth <= 860) {
//     site_nav.classList.add('hidden');
//   } else {
//     site_nav.classList.remove('hidden');
//   }
// });

burger_menu.addEventListener('click', () => {
  site_nav.classList.toggle('show-flex');
});