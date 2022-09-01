function solicitarNombre(){
    let nombreIngresado = prompt(`Ingresar nombre`)
    alert(`Hola estas en el cotizador ` + nombreIngresado)
} 

function cotizador() {
    const cotizacionDolar = 40;
const cotizarDolar = (pesos) => pesos / cotizacionDolar;
const cotizarPesos = (dolar) => dolar * cotizacionDolar;
let seleccion = prompt(`Selecciona cotizacion \n 1 - Dolar a peso \n 2 -  Peso a dolar `);
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
        
}
   }
solicitarNombre();

cotizador();


let otraCotizacion = prompt(`Desea otra cotización?`);

if((otraCotizacion == "SI") || (otraCotizacion =="si")){
cotizador()
   
} 
else{
    alert("Adios"); 
}

