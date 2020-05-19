window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger__active');
        menu.classList.toggle('header__menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('header__burger__active');
            menu.classList.toggle('header__menu__active');
        })
    })
})