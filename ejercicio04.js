import { peliculas } from './peliculas.js';

const filtroIdiomaPelicula = (peliculas, lenguaje) => {
    let arrayPlenguajeFiltrado = [];
    peliculas.forEach(pelicula => {
        if (pelicula['original_language'] === lenguaje){
            arrayPlenguajeFiltrado.push(pelicula);
        }
    });
    return arrayPlenguajeFiltrado;
}

let idioma = prompt("Ingrese el idioma de las peliculas que desee filtrar")
console.log(`Las peliculas en el idioma ${idioma.toUpperCase()} son : `);
console.log(filtroIdiomaPelicula(peliculas, idioma));