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

        const imageProyect = document.createElement('img');
        imageProyect.classList.add('image-proyecto')
        imageProyect.setAttribute('src', proyect.image);

        const contenedorHerramientas = document.createElement('div');
        contenedorHerramientas.classList.add('container-herramientas');

        const iconHtml = document.createElement('img');
        iconHtml.setAttribute('src', proyect.iconHTML);
        const iconCss = document.createElement('img');
        iconCss.setAttribute('src', proyect.iconCss);
        const iconJs = document.createElement('img');
        iconJs.setAttribute('src', proyect.iconJs);

        const containerTitleDescrip = document.createElement('div');

        const tema = document.createElement('h1');
        tema.classList.add('title-card');
        tema.textContent = proyect.name;

        const descripcion = document.createElement('p');
        descripcion.textContent = proyect.descripcion;

        const containerButtons = document.createElement('div');
        containerButtons.classList.add('container-card-butons');

        const btnRepositorio = document.createElement('a');
        btnRepositorio.setAttribute('href', proyect.repositorio);
        btnRepositorio.innerText = "Repositorio"

        const btnWeb = document.createElement('a');
        btnWeb.setAttribute('href', proyect.sitioWeb);
        btnWeb.innerText = "Sitio Web"





        contenedorDeCards.appendChild(containerProyect);

        containerProyect.appendChild(imageProyect);

        containerProyect.appendChild(contenedorHerramientas);

        contenedorHerramientas.appendChild(iconHtml);
        contenedorHerramientas.appendChild(iconCss);
        contenedorHerramientas.appendChild(iconJs);

        containerProyect.appendChild(containerTitleDescrip);

        containerTitleDescrip.appendChild(tema);
        containerTitleDescrip.appendChild(descripcion);

        containerProyect.appendChild(containerButtons);

        containerButtons.appendChild(btnRepositorio);
        containerButtons.appendChild(btnWeb);
    }
}

renderProyects(listProyectos)