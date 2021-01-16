"use strict";

// Работа с burger-menu
var burger_menu = document.querySelector('.header__menu');
var site_nav = document.querySelector('.nav__items');
burger_menu.addEventListener('click', function () {
  site_nav.classList.toggle('show-flex');
});