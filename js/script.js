window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.menu-btn');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu-btn_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_btn_active');
            menu.classList.toggle('nav_active');
        })
    })
})