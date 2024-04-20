const logoMenu = document.querySelector('.icon-menu');
const logoCerrar = document.querySelector('.logo-cerrar');
const menuMobile = document.querySelector('.nav-mobile');

logoMenu.addEventListener('click', abrirMenuMobile);
logoCerrar.addEventListener('click', cerrarMenuMobile);

function abrirMenuMobile(){
    menuMobile.classList.remove('inactive');
}

function cerrarMenuMobile(){
    menuMobile.classList.add('inactive');
}
