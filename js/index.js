"use strict";

// Работа с burger-menu
var burger_menu = document.querySelector('.header__menu');
var site_nav = document.querySelector('.nav__items'); // window.addEventListener('resize', () => {
//   if (document.documentElement.clientWidth <= 860) {
//     site_nav.classList.add('hidden');
//   } else {
//     site_nav.classList.remove('hidden');
//   }
// });

burger_menu.addEventListener('click', function () {
  site_nav.classList.toggle('show-flex');
});