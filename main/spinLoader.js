window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-container');
    const content = document.querySelector('.content');
    
    // Oculta el loader y muestra el contenido cuando la página está completamente cargada
    loader.style.display = 'none';
    content.style.display = 'block';
});