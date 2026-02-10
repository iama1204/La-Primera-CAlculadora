import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento CLICK a cada enlce
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function () {
        //Remover la clase de activo de todos los enlaces 
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
            //Agregar la clase de avtivo al enlace actual
            this.classList.add('active')
            //Obtener el contenido correspondienrte 
            let contenido = obtenerContenido(this.textContent)

            tituloElemento.innerHTML = contenido.titulo
            subTituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
            precioElemento.innerHTML = contenido.precio
    });
});

//Funcion para traer la informacion correcta desde cuidades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}