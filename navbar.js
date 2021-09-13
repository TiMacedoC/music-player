const menu = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

//Abrir navbar
menu.addEventListener('click', () => {
    navBar.classList.add('open');
    menu.style.opacity = "0";
})

//Função que fecha a navbar
function closeNavbar() {
    navBar.classList.remove('open');

    //Depois que fechar espera para mostrar o menu btn
    setTimeout(() => {
        menu.style.opacity = "1";
    }, 900);
};


//Fechar a navbar clicando fora
window.onclick = function (event) {
    if (event.target.id == "player") {
        closeNavbar();
    }
};