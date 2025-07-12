// JAVASCRIPT PARA GENERAR EL MENU

//creamos una variable para seleccionar el Header del html
let menuContainer = document.getElementById('menu');

//creo un contenedor
let contenedorMenu = document.createElement('div');

//agrego una clase/estilo CSS al contenedor de los productos
contenedorMenu.classList.add('nav-container');

//Le agregamos al documento un Listener que se dispare cuando el evento
// DOMContentLoad finalice ,
// luego dispara una función que genera el menu en todas las páginas,  teniendo presente el path del index.html

document.addEventListener("DOMContentLoaded", (event) => {
    let path=""
    document.title === "Veterinaria Güemes" ? path="" : path="../";
    contenedorMenu.innerHTML += `
        <a href="${path}index.html" class="menu inicio">Inicio</a>
        <a href="${path}pages/perros.html" class="menu perros">Perros</a>
        <a href="${path}pages/gatos.html" class="menu gatos">Gatos</a>
        <a href="${path}pages/sorteo.html" class="menu sorteo">Sorteo</a>
        <a href="${path}pages/risas.html" class="menu risas">Risas (jaja)</a>
        `;
    menuContainer.append(contenedorMenu);
});
