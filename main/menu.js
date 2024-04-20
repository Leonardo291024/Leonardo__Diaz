const logoMenu = document.querySelector('.icon-menu');
const logoCerrar = document.querySelector('.logo-cerrar');
const menuMobile = document.querySelector('.nav-mobile');

logoMenu.addEventListener('click', abrirMenuMobile);
logoCerrar.addEventListener('click', cerrarMenuMobile);

function abrirMenuMobile(){
    menuMobile.style.animationName = 'top_bottom';
    menuMobile.classList.remove('inactive');
}

function cerrarMenuMobile(){
    menuMobile.style.animationName = 'moverIzquierda'
    menuMobile.classList.add('inactive');
}
