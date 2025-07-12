// JAVASCRIPT PARA GENERAR EL HEADER

//creamos una variable para seleccionar el Header del html
let headerContainer = document.getElementById('encabezado');

  //creo un contenedor
let contenedorHeader = document.createElement('div');

//Le agregamos al documento un Listener que se dispare cuando el evento
// DOMContentLoad finalice ,
// luego dispara una función que genera el mismo header en todas las páginas

document.addEventListener("DOMContentLoaded", (event) => {
    contenedorHeader.innerHTML += `
        <h1>Veterinaria Güemes</h1>
        <h3>Cuidamos a nuestros Perros y Gatos</h3>
        <div class="ref">
            <p>Comisión 25019 Front End JS</p>
            <p class="name">OTRANTO Marcelo Daniel<p>
        </div>
    `;
    headerContainer.append(contenedorHeader);
});
