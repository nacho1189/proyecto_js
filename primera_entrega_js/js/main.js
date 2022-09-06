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
];
const marcas = [
    'Samsung',
    'Philips',
    'LG',
];
const colores = [
    'Negro',
    'Gris',
    'Blanco',
];

console.log(productos);


while(option !== 0) {
    option =Number(prompt(`Selecciona una opción \n 1 - Comprar Prducto \n 2 - Ver producto \n 0 -  Salir `));
    switch (option) {
        case 1:
            const producto = Number(prompt('Ingrese el producto que desea agregar \n 1 - Televisor \n 2 - Celular'))
            const color = prompt('Ingrese el color del producto');
            const marca = Number(prompt('Ingrese la marca del producto \n 1 - Philips \n 2 - Samsung'))
            const id = getLastID()+ 1;
            createProducto(id,producto, marca, color);
            break;
        case 2:
            
            getAllPrductos();
            break;
        case 3:
            let deleteID = Number(prompt('Ingrese el ID de la tarea a eliminar: '));
            deletePrductos(deleteID);
        case 0:
            alert('Gracias regrese pronto ');
            break;
        default:
            alert('La opción ingresada no es correcta, intente nuevamente');
            break;
    }
    
}

function createProducto(id, pruducto, marca, color) {
    productos.push({
        id,
        pruducto,
        marca,
        color: colores[color - 1] 
    });
}

function getAllPrductos() {
    console.log('\n------------------------------\n');
    productos.forEach((producto) => console.log(producto.id + " - " + marcas[producto.marca - 1] + " - " + producto.producto + " - " + producto.color));
}
function getLastID(){
    return productos.length;
}
function deletePrductos(id) {
    productos = productos.filter(producto => producto.id != id); 
}
function getLastID() {
    const ids = productos.map(producto => producto.id);
    return Math.max(...ids);
}