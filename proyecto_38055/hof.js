

/* Función que recibe como parámetro 
*  otra función.
*/

// function imprimirValores(collection, pepe) {

//     for (item of collection) {
//         pepe(item, collection.indexOf(item));
//     }
// }

function sumarIVA(precio) {
     console.log(precio * 1.21);
}

// imprimirValores(frutas, console.log);
// // imprimirValores(frutas, alert);
// // imprimirValores(frutas, (item, index) => console.log(index + ": " + item));
// imprimirValores(precios, (precio) => precio * 1.21);




/* Función que devuelve como resultado 
*  otra función.
*/

// function esMayorQue(a) {
//     return (b) => b > a;
// }
// const esMayorQueVeinte = esMayorQue(20);

// console.log(esMayorQueVeinte(20));


// function crearOperacion(operacion) {

//     switch (operacion) {
//         case 'sumar':
//                 return (a, b) => a + b;
//         case 'restar':
//                 return (a, b) => a - b;
//         case 'dividir':
//                 return (a, b) => a / b;
//         case 'multiplicar':
//                 return (a, b) => a * b;        
//         default:
//             'No conozco esa operación'
//             break;
//     }

// }


// const sumar = crearOperacion('sumar');
// const restar = crearOperacion('restar');
// const multiplicar = crearOperacion('multiplicar');
// const dividir = crearOperacion('dividir');


// console.log(sumar(10, 20));
// console.log(restar(30, 13));
// console.log(multiplicar(3, 3));
// console.log(dividir(10, 4));
// console.log(sumar(40, 5));


/**
 * METODOS DE ARRAYS
 */

 const frutas = ['Pera', 'Manzana', 'Naranja', 'Frutilla'];
 const precios = [100, 550, 35, 1200];


 precios.sort((a, b) => b - a);

console.log(precios);

// FOR EACH - por cada elemento del array tengo que hacer lo que dice la funcion que paso por parámetro


frutas.forEach((fruta, index) => console.log(index + ": " + fruta));

precios.forEach(precio => sumarIVA(precio));

// FIND - busca un elemento en el array indicado

const productos = [
    {
        nombre: 'Heladera Electrolux',
        precio: 30000,
        categoria: 'Heladeras',
        vendido: true
    },
    {
        nombre: 'Heladera Philco',
        precio: 22000,
        categoria: 'Heladeras',
        vendido: false
    },
    {
        nombre: 'Televisor LG',
        precio: 60000,
        categoria: 'Televisores',
        vendido: true
    }
 ]
 
const resultado = productos.find(producto => producto.categoria === 'Heladeras');
const frutaBuscada = frutas.find(fruta => fruta === 'Manzana');

console.log(resultado);
console.log(frutaBuscada);

// SOME - busca un elemento en el array indicado y si existe devuelve el booleano
const hayHeladeras = productos.some(producto => producto.categoria === 'Heladeras');
console.log(hayHeladeras);

// FILTER - busca todos los elementos que coincidan con el parametro buscado

const resultados = productos.filter(producto => producto.categoria === 'Heladeras' && producto.precio > 25000);
console.log(resultados);

// MAP - devuelve un nuevo array con todos los resultados de esa condicion

const listadoDeProductos = productos.map(producto => producto.nombre);
const listadoDeProductos2 = productos.forEach(producto => producto.nombre);

console.log(listadoDeProductos);
console.log(listadoDeProductos2);

// REDUCE - devuelve la acumulacion de los valores de un array

const recaudacionTotal = productos.map(producto => producto.vendido === true).reduce((acc, cur) => acc + cur, 0);

console.log(recaudacionTotal);