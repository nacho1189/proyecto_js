let msge1=`hola`;
let msge2=`el resultado`;
let msge3= `de la multiplicación de`;
let msge4= `es`;
let Blanco= ` `;
let ingresarNumero = parseInt(prompt(`Ingresar Numero`));

 for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log( msge1 + Blanco+ msge2 + Blanco+msge3 + Blanco+ ingresarNumero +` * `+ i + Blanco+ msge4  + ` = ` +  resultado);
}
