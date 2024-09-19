// lo que hara este evento es que al cargar la pagina mostrara un alert 
window.addEventListener('load', () => {

alert("Bienvenido al sistema");

});


//Encriptando la informacion 
//botón
const encriptador = document.getElementById("encriptar")

encriptador.addEventListener('click', () => { 
//texto que hemos encriptado 
const textoEncriptado = document.getElementById("texto");
// el input que recibiremos el texto
const input = document.getElementById("textarea");

//aqui asignamos el valor del texto a la siguiente seccion
textoEncriptado.innerText = input.value + "\n";

//En este apartado ocultaremos nuestro h3 
const textoOculto = document.getElementById('textoOculto');

//con la propiedad display al ponerla en none los elementos se ocultaran 
textoOculto.style.display = 'none';

})