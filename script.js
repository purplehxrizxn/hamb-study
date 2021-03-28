const btnMenu = document.querySelector('.btnMenu');
const menu = document.querySelector('#menu');
const btnClose = document.querySelector('.btnMenu_close');

btnMenu.addEventListener('click', () => {
    menu.classList.add('menu_open');
});

btnClose.addEventListener('click', ()  =>  {
    menu.classList.remove('menu_open');
});

