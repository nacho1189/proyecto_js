let option
const productos =[
    {
        id: 1,
        producto: 'Televisor',
        marca: 'Philips',
        color: 'Negro',
    },
    {

        id: 2,
        producto: 'Celular',
        marca: 'Samsung',
        color: 'Gris',
    },
    {

        id: 3,
        producto: 'heladera',
        marca: 'LG',
        color: 'Blanco',
    },
];


console.log(productos);


while(option !== 0) {
    option =Number(prompt(`Selecciona una opción \n 1 - Comprar Prducto \n 2 - Ver producto \n 3 - Borrar producto \n 0 -  Salir `));
    switch (option) {
        case 1:
            const productos = Number(prompt('Ingrese el producto que desea agregar \n 1 - Televisor \n 2 - Celular\n 3 - Heladera'))
            break;
        case 2:
            getAllPrductos();
            break;
        case 3:
            let deleteID = Number(prompt('Ingrese el ID del producto a eliminar \n 1 - Televisor \n 2 - Celular\n 3 - Heladera'));
            deletePrductos(deleteID);
        case 0:
            alert('Gracias regrese pronto ');
            break;
        default:
            alert('La opción ingresada no es correcta, intente nuevamente');
            break;
    }
    
}

function deletePrductos(id) {
    productos = productos.filter(producto => producto.id != id); 
}
function getAllPrductos() {
    console.log();
    productos.forEach((producto) => console.log(producto.id + " - " + producto.marca  + " - " + producto.producto + " - " + producto.color));
}
