// Работа с burger-menu
const burger_menu = document.querySelector('.header__menu');
const site_nav = document.querySelector('.nav__items');

burger_menu.addEventListener('click', () => {
  site_nav.classList.toggle('show-flex');
});