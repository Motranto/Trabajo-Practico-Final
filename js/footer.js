// JAVASCRIPT PARA GENERAR EL FOOTER

//creamos una variable para seleccionar el Header del html
let footerContainer = document.getElementById('pie');

  //creo un contenedor
let contenedorFooter = document.createElement('div');

//Le agregamos al documento un Listener que se dispare cuando el evento
// DOMContentLoad finalice ,
// luego dispara una función que genera el mismo footer en todas las páginas

document.addEventListener("DOMContentLoaded", (event) => {
    contenedorFooter.innerHTML += `
        <div class="footer-container">
            <div class="footer-item">
                <form action="gracias.html" method="get">
                    <br>
                    <fieldset class="footer-fieldset">
                        <legend class="footer-texto-G">Contactate </legend>
                        <label for="nombre" class="footer-texto">Nombre</label>
                        <br>
                        <input class="footer-texto" size="40" type="text" id="nombre" name="Nombre" required>
                        <br>
                        <br>
                        <label for="comentario" class="footer-texto">Comentarios</label>
                        <br>
                        <textarea class="footer-texto" id="comentario" name="comentario" rows="5" cols="40" placeholder=" Dejanos tus comentarios."></textarea>
                        <br><br>
                        <button class="btn-footer footer-texto" type="submit">Confirmar</button>
                    </fieldset>
                </form>    
            </div>
            <div class="footer-item">
                <div class="footer-texto-G">Donde estamos</div>
                <p class="footer-texto">Güemes 3701 Villa Martelli, Pcia. de Buenos Aires</p>
                <iframe title="mapa" style="filter: invert(5%)" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4783.92404540599!2d-58.508779323019596!3d-34.54227718206126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7dd0ed6b3a3%3A0xd9c9fdacafa43652!2sVeterinaria%20guemes!5e0!3m2!1ses-419!2sar!4v1747242151974!5m2!1ses-419!2sar" width="50%" height="60%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="footer-item">
                <div class="footer-texto-G">Nuestras Redes</div>
                <br>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="currentColor" d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08c0-.443-.156-.856-.527-1.197c-.622-.571-1.671-.268-2.862-.268M8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908s.657.406.657.908c.001.502-.293.91-.657.91m3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908c.001.502-.293.91-.656.91M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m.876 13.539c-.172 0-.514 0-.876.002c-.362-.002-.704-.002-.876-.002c-.76 0-3.772-.059-3.772-3.689c0-.834.286-1.445.755-1.955c-.074-.184-.078-1.232.32-2.236c0 0 .916.1 2.301 1.051c.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051c.398 1.004.395 2.053.32 2.236c.469.51.755 1.121.755 1.955c-.001 3.632-3.013 3.69-3.773 3.69"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7s10-.874 10-7.7s-.172-7.7-10-7.7m3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668"/></svg>
                </div> 
            </div>
        </div>
    `;
    footerContainer.append(contenedorFooter);
});
