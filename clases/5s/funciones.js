/* function test1 (x,y) {
return y - x
}
console.log(test1 (10,40))

function test2(x, y){
return x * 2;
console.log(x);
return x / 2;
}
console.log (test2(10)) */

const prompt = require("prompt-sync")({sigint: true });

// Funciones simples utilizando prompt

//  1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
// function convertirPulgadaACentimetro() {
    
//     let pulgada = prompt('Ingrese el valor en centimetros para convertir en pulgada: ');
//     let centimetro = pulgada * 2.54;
// console.log(pulgada , 'pulgadas equivalen a', centimetro, 'centimetros');
// }
// convertirPulgadaACentimetro();

// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

// function url(){
//     let dominio = prompt('Ingrese su dominio: ');
//     console.log('http://www.' + dominio + '.com');
// }
// url();

// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

function Admiracion(){

    const frase = prompt('ingrese su frase para devolver admiración: ');
    const fraseConAdmiracion = frase + '!';
    console.log(fraseConAdmiracion);
}
Admiracion();

