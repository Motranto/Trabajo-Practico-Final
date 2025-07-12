/*
En este archivo se encuentra el comportamiento del formulario 
Se extraen los valores de los campos y del radio button 
Y se muestra un mensaje en el DIV a la derecha del formulario
*/

// Obtiene los valores del form, div y boton de limpiar
const form = document.getElementById('formularioSorteo'); // Obtengo el formulario
const resultadoDiv = document.getElementById('resultado'); // Obtengo el DIV
const btnLimpiar = document.getElementById('btnLimpiar');  // Obtengo el botón de limpiar

// Escuchamos el botón enviar (submit) del form y llmamos a la función mostrarMensje 
form.addEventListener('submit', mostrarMensaje);

// Escuchamos el click al botón de limpiar
btnLimpiar.addEventListener('click', limpiarForm);

//Funciones

//En esta función creamos el mensaje de acuerdo a la valoración recibida
function mostrarMensaje(evt) {
  evt.preventDefault();   // Evita que el formulario se envíe y recargue la página

  // Obtiene los valores de los campos
  const txtEmail = document.getElementById("email").value;
  const txtNombre = document.getElementById('nombre').value;
  const txtApellido = document.getElementById('apellido').value;
  const txtComentario = document.getElementById("comentario").value;

  // Obtiene la calificación seleccionada
  const valoracion = document.querySelector('input[name="valoranos"]:checked').value;

  let lineaDatos="";
  let error=false;

  // Hacemos las validaciones
  // dominio de mail
  const esGmail = (Email) => Email.split('@')[1] === 'gmail.com';
  const esOutlook = (Email) => Email.split('@')[1] === 'outlook.com';
  const esYahoo = (Email) => Email.split('@')[1] === 'yahoo.com';
  const esAol = (Email) => Email.split('@')[1] === 'aol.com';

  if (!esGmail(txtEmail) && !esOutlook(txtEmail) && !esYahoo(txtEmail) && !esAol(txtEmail)){
    lineaDatos+=`<strong><em>❌ ERROR:</strong> Solo aceptamos MAILS Gmail, Outlook, Yahoo o AOL.<br> 
                El dominio: ${txtEmail.split('@')[1]} no es valido</em><br>`;
    error=true;
  }

  // longitud del nombre
  if (txtNombre.length<=2) {
    lineaDatos+=`<strong><em>❌ ERROR:</strong> debe ingresar un NOMBRE de más de 2 caracteres</em><br>`;
    error=true;
  }

  // longitud del apellido
  if (txtApellido.length<=2) {
    lineaDatos+=`<strong><em>❌ ERROR:</strong> debe ingresar un APELLIDO de más de 2 caracteres</em><br>`;
    error=true;
  }

  // si no hay error de validación
  if (!error){
    // Crea la línea con los datos a mostrar
    lineaDatos = ` Estimado Sr/a. ${txtApellido}, ${txtNombre} <br><br>`

    if (valoracion == 5){
      lineaDatos+=`Le agradecemos su MÁXIMA valoración de ${valoracion} puntos!!<br><br>`;
    } else if (valoracion == 4 || valoracion == 3){
      lineaDatos+=`Le agradecemos su valoración de ${valoracion} puntos.<br>`;
      lineaDatos+=`Aún así, sabemos que nos quedan cosas para mejorar y así alcanzar tu máxima valoración.<br><br>`
    } else {
      lineaDatos+=`Le pedimos disculpas que no sea de su agrado nuestra página web.<br>`;
      lineaDatos+=`Su valoración de ${valoracion} punto`;
      lineaDatos+= valoracion==2 ? `s` : ``;
      lineaDatos+= ` nos indica que debemos mejorar.<br><br>`;
    }
    
    if (txtComentario.length>0){  
      lineaDatos+= `Su comentario: <em>\" ${txtComentario}\"</em> lo tendremos en cuenta.<br><br>`;
      lineaDatos+= `Le responderemos a la brevedad a su casilla de correo: ${txtEmail}<br>`;
    }
    lineaDatos+= `<br><br>    ¡¡ Muchas gracias por ayudarnos !!`;
  }

  // Muestra la línea en el div de resultado
  resultadoDiv.innerHTML = lineaDatos;
  // Agrega las clases para mostrar el recuadro y asigna el tipo de letra
  resultadoDiv.classList.add('mostrar-borde');
  resultadoDiv.classList.add('texto');
}

//En esta función limpimos los campos del formulario y el DIV del resultado

function limpiarForm(evt) {
  form.reset(); // Limpia los campos del formulario
  resultadoDiv.innerHTML = ''; // Limpia el resultado
  // Limpia las clases
  resultadoDiv.classList.remove('mostrar-borde'); 
  resultadoDiv.classList.remove('texto');
}