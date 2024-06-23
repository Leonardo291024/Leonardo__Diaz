/*
    <!--article>
        <img class="image-proyecto" src="./imgs/imgs-proyects/batatabit.png" alt="">
        <div class="container-herramientas">
            <img src="./imgs/icons/icons8-javascript-48.png" alt="">
            <img src="./imgs/icons/icons8-html-48.png" alt="">
            <img src="./imgs/icons/icons8-css-48.png" alt="">
        </div>
        <div>
            <h1 class="title-card">Tema</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellendus inventore natus dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur optio in.</p>
        </div>
        <div class="container-card-butons">
            <button>Repositorio</button>
            <button>Sitio web</button>
        </div>
       </!--article-->
 */

const contenedorDeCards = document.querySelector('.container-cards-proyects');

function renderProyects(arr){
    for(proyect of arr){
        const containerProyect = document.createElement('article');
        containerProyect.classList.add('card')
        //containerProyect.style.width = '16rem'
        contenedorDeCards.appendChild(containerProyect);

        const imageProyect = document.createElement('img');
        imageProyect.classList.add('card-img-top')
        imageProyect.setAttribute('src', proyect.image);
        containerProyect.appendChild(imageProyect);

        const containerCardBody = document.createElement('div');
        containerCardBody.classList.add('card-body');
        containerProyect.appendChild(containerCardBody);

        const titleProyect = document.createElement('h5');
        titleProyect.classList.add('card-title')
        titleProyect.textContent = proyect.name;
        containerCardBody.appendChild(titleProyect);
    
        const containerIcons = document.createElement('div');
        containerIcons.classList.add('card-icons');
        containerCardBody.appendChild(containerIcons);

        const iconHtml = document.createElement('i');
        iconHtml.classList.add('bi-filetype-html');
        containerIcons.appendChild(iconHtml);

        const iconCss = document.createElement('i');
        iconCss.classList.add('bi-filetype-css');
        containerIcons.appendChild(iconCss);

        const iconJs = document.createElement('i');
        iconJs.classList.add('bi-filetype-js');
        containerIcons.appendChild(iconJs);

        const btnPrimary = document.createElement('a');
        btnPrimary.setAttribute('href', proyect.repositorio);
        btnPrimary.target = '_blank';
        btnPrimary.classList.add('btn', 'btn-primary');
        btnPrimary.innerText = "Go Proyect";
        console.log(btnPrimary);
        containerCardBody.appendChild(btnPrimary);
    }
}

renderProyects(listProyectos)