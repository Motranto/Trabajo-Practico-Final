
//Creamos un listado de productos (objetos)
//simulando que vienen de parte del backend

//1. Creamos la variable productos en un array/matriz y dentro declaramos los objetos

let tituloPagina = document.title;

let productos = [];

if (tituloPagina === "Perros") {
    productos = [
      {
      "id" : 1001,
      "image" : "../media/img/perros/138008-138007-138009-138006.webp",
      "oferta" : "&nbsp",
      "price" : 85700,
      "name" : "Alimento Perro Adulto <em>\"Small Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1002,
      "image" : "../media/img/perros/138004-138005.png",
      "oferta" : "&nbsp",
      "price" : 87500,
      "name" : "Alimento Perro Adulto <em>\"Medium Bread\"</em>",
      "envio" : true
      }
      ,
      {
      "id" : 1003,
      "image" : "../media/img/perros/138003-138002.jpg",
      "oferta" : "15% Descuento",
      "price" : 78650,
      "name" : "Alimento Perro Adulto <em>\"Large Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1004,
      "image" : "../media/img/perros/138043.jpg",
      "oferta" : "&nbsp",
      "price" : 74500,
      "name" : "Alimento Perro Senior <em>\"Small Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1005,
      "image" : "../media/img/perros/138040-138041.jpg",
      "oferta" : "&nbsp",
      "price" : 74500,
      "name" : "Alimento Perro Senior <em>\"Medium Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1006,
      "image" : "../media/img/perros/138039-138038.jpg",
      "oferta" : "&nbsp",
      "price" : 74500,
      "name" : "Alimento Perro Senior <em>\"Large Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1007,
      "image" : "../media/img/perros/138176-138177.png",
      "oferta" : "10% Descuento",
      "price" : 77300,
      "name" : "Alimento Perro Control Peso <em>\"Small Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1008,
      "image" : "../media/img/perros/138178-138179.png",
      "oferta" : "10% Descuento",
      "price" : 77300,
      "name" : "Alimento Perro Control Peso <em>\"Medium Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1009,
      "image" : "../media/img/perros/138180-138181.jpg",
      "oferta" : "10% Descuento",
      "price" : 77300,
      "name" : "Alimento Perro Control Peso <em>\"Large Bread\"</em>",
      "envio" : false
      }
      ,
      {
      "id" : 1010,
      "image" : "../media/img/perros/138035-138036.jpg",
      "oferta" : "&nbsp",
      "price" : 87500,
      "name" : "Alimento Perro Cachorro <em>\"Small Bread\"</em>",
      "envio" : true
      }
      ,
      {
      "id" : 1011,
      "image" : "../media/img/perros/138032-138033.jpg",
      "oferta" : "Oportunidad",
      "price" : 70865,
      "name" : "Alimento Perro Cachorro <em>\"Medium Bread\"</em>",
      "envio" : false
      }    
      ,
      {
      "id" : 1012,
      "image" : "../media/img/perros/157027.jpg",
      "oferta" : "Última unidad",
      "price" : 69000,
      "name" : "Alimento Perro Cachorro <em>\"Large Bread\"</em>",
      "envio" : true
      }
    ];

  } else if (tituloPagina === "Gatos") {

  productos = [
    {
    "id" : 2001,
    "image" : "../media/img/gatos/100137.jpg",
    "oferta" : "10% Descuento",
    "price" : 75700,
    "name" : "Alimento para Gato <em>\"Indoor\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 2002,
    "image" : "../media/img/gatos/156100.jpg",
    "oferta" : "Único Renal",
    "price" : 107300,
    "name" : "Alimento para Gato <em>\"Renal\"</em>",
    "envio" : true
    }
    ,
    {
    "id" : 2003,
    "image" : "../media/img/gatos/156108.jpg",
    "oferta" : "&nbsp",
    "price" : 85700,
    "name" : "Alimento para Gato <em>\"Gatos Castrados\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 2004,
    "image" : "../media/img/gatos/156234.jpg",
    "oferta" : "&nbsp",
    "price" : 101800,
    "name" : "Alimento para Gato <em>\"Urinario\"</em>",
    "envio" : true
    }
    ,
    {
    "id" : 2005,
    "image" : "../media/img/gatos/156286.png",
    "oferta" : "Oportunidad",
    "price" : 93700,
    "name" : "Alimento para Gato <em>\"FIT\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 2006,
    "image" : "../media/img/gatos/156298-1.jpg",
    "oferta" : "&nbsp",
    "price" : 87700,
    "name" : "Alimento para Gato <em>\"Cachorros\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 2007,
    "image" : "../media/img/gatos/168008.png",
    "oferta" : "Performance",
    "price" : 93100,
    "name" : "Alimento para Gato <em>\"Cachorros\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 2008,
    "image" : "../media/img/gatos/168010-1.jpg",
    "oferta" : "Performance",
    "price" : 85700,
    "name" : "Alimento para Gato <em>\"Adulto\"</em>",
    "envio" : false
    }
    ,
    {
    "id" : 20098,
    "image" : "../media/img/gatos/rc-gastro.jpg",
    "oferta" : "&nbsp",
    "price" : 99200,
    "name" : "Alimento para Gato <em>\"Gastrointestinal\"</em>",
    "envio" : true
    }
  ];
};

  //2. Mostramos estos productos en nuestra página o sección
  // Vamos a manipular el DOM , creando nuevos elementos para
  // mostrar los datos de cada producto

  //creamos una variable para seleccionar la section productos del html
let productosContainer = document.getElementById('productos');

  //creo un contenedor individual para cada producto
let contenedorProducto = document.createElement('div');

  //agrego una clase/estilo CSS al contenedor de los productos
contenedorProducto.classList.add('flex-container-productos');

  //Le agregamos al documento un Listener que se dispare cuando el evento
  // DOMContentLoad finalice , luego dispara una función que va iterando el 
  // listado de productos y a los valores que va extrayendo los 
  // ubica dentro de una estructura HTML
  //Carga de productos

//let cardProducto="";

document.addEventListener("DOMContentLoaded", (event) => {
    productos.forEach(producto => {

        let cardProducto = '<div class="item">';
        if (producto.envio){
            cardProducto += '<img class="envio" src="../media/img/Envio.png">';
        };
        cardProducto += '<img class="photo" src="' + `${producto.image}` + '" alt="" width="200">';
        cardProducto += '<p class="precio texto-G">$ ' + `${producto.price}` + '.-</p>';
        cardProducto += '<button class="btn-comprar">Comprar</button>';
        cardProducto += '<p class="oferta texto">' + `${producto.oferta}` + '</p>';
        cardProducto += '<p class="descripcion texto-G">' + `${producto.name}` + '</p>';
        cardProducto += '<\div>';

        contenedorProducto.innerHTML += cardProducto;
    })

    productosContainer.append(contenedorProducto);
    });

