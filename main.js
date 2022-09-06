
// function solicitarNombre(){
//     let nombreIngresado = prompt(`Ingresar nombre`)
//     alert(`Hola estas en el cotizador ` + nombreIngresado)
// } 

// function cotizador() {
//     const cotizacionDolar = 40;
// const cotizarDolar = (pesos) => pesos / cotizacionDolar;
// const cotizarPesos = (dolar) => dolar * cotizacionDolar;
// let seleccion = prompt(`Selecciona cotizacion \n 1 - Dolar a peso \n 2 -  Peso a dolar `);
// let valor = prompt("VALOR");
// switch (seleccion) {
//     case "1":
//         alert(cotizarPesos(valor));
//         break;
//     case "2":
//         alert(cotizarDolar(valor));
//         break;
//     default:
//         break;
        
// }
//    }
// solicitarNombre();

// cotizador();


// let otraCotizacion = prompt(`Desea otra cotización?`).toLocaleLowerCase()

// if(otraCotizacion == 'si') {
// cotizador()
   
// } 
// else{
//     alert("Adios"); 
// }

// function solicitarNombre(){
//     let nombreIngresado = prompt(`Ingresar nombre`)
//     alert(`Hola estas en el cotizador ` + nombreIngresado)
// } 

// function cotizador() {
//     const cotizacionDolar = 40;
// const cotizarDolar = (pesos) => pesos / cotizacionDolar;
// const cotizarPesos = (dolar) => dolar * cotizacionDolar;

function solicitarNombre(name, lastname, edad, ) {
    this.nombre = name;
    this.apellido = lastname;
    this.edad = edad;
    

    this.saludar = function (){
        alert(`Hola estas en el cotizador ` + this.nombre);
    }
}



// function solicitarNombre(){
//     let nombreIngresado = prompt(`Ingresar nombre`);
//     alert(`Hola estas en el cotizador ` + nombreIngresado);
//     }
     

    const cotizacionDolar = 40;
    const cotizarDolar = (pesos) => pesos / cotizacionDolar;
    const cotizarPesos = (dolar) => dolar * cotizacionDolar;   

    let option; 
    solicitarNombre()

while(option !== 0) {
    option =Number(prompt(`Selecciona cotizacion \n 1 - Dolares a pesos \n 2 -  Pesos a dolares\n 0 -  Salir `));
    switch (option) {
        case 1:
            var valor = prompt("Valor");
            alert(cotizarPesos(valor));
            break;
        case 2:
            valor = prompt("Valor");
            alert(cotizarDolar(valor));
            break;
        case 0:
            alert('Gracias regrese pronto ');
            break;
        default:
            alert('La opción ingresada no es correcta, intente nuevamente');
            break;
    }
    
}


