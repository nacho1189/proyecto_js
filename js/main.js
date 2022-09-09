let option
let productos =[
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
        producto: 'Heladera',
        marca: 'LG',
        color: 'Blanco',
    },
];
const Producto = [
    'Televisor',
    'Celular',
    'Heladera',
    
];
const marcas = [
    'Philips',
    'Samsung',
    'LG',
];
const colors = [
    'Negro',
    'Gris',
    'Blanco',
];




while(option !== 0) {
    option =Number(prompt(`Selecciona una opción \n 1 - Comprar Prducto \n 2 - Ver producto \n 3 - Borrar producto \n 0 -  Salir `));
    switch (option) {
        case 1:
            const producto = prompt('Ingrese el producto que desea agregar \n 1 - Televisor \n 2 - Celular\n 3 - Heladera')
            const marca = prompt('Ingrese la marca del producto \n 1 - Philips \n 2 - Samsung \n 3 - LG')
            const color = prompt('Ingrese el color del producto \n 1 - Negro \n 2 - Gris \n 3 - Blanco')
            const creationID = getLastID() + 1;
            agregarProducto(creationID, producto, marca, color);
            break;
        case 2:
            getAllPrductos();
          
            break;
        case 3:
            let deleteID = Number(prompt('Ingrese el ID del producto a eliminar'));
            deletePrducto(deleteID);
            break; 
        case 0:
            alert('Gracias regrese pronto ');
            break;
        default:
            alert('La opción ingresada no es correcta, intente nuevamente');
            break;
    }
    
}

function deletePrducto(id) {
    productos = productos.filter(producto => producto.id != id); 
}
function getAllPrductos() {
    console.log('\n------------------------------\n');
    productos.forEach((producto) => console.log(producto.id + " - " + producto.producto  + " - " + producto.marca + " - " + producto.color));
}
function getLastID() {
    const ids = productos.map(producto => producto.id);
    return Math.max(...ids);
}

function agregarProducto(id, producto, marca, color) {
    productos.push({
        id,
        producto: Producto[producto-1],
        marca: marcas[marca -1],
        color: colors[color - 1]
    });
}

