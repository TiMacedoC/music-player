const menu = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');


menu.addEventListener('click', () => {
    navBar.classList.add('open')
    menu.style.opacity = "0";
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('open')

    setTimeout(() => {
        menu.style.opacity = "1";
    }, 900);
})