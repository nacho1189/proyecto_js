let option;
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
        producto: 'Heladera',
        marca: 'LG',
        color: 'Blanco',
    },
    {
        id: 4,
        producto: 'Aspiradora',
        marca: 'Philips',
        color: 'Rojo',
    }



];

productos.forEach(function(id, producto,marca, color) {
    console.log(id, producto,marca, color);
})


while (option !==0) {
    option =Number(prompt(`Selecciona una opción \n 1 - Comprar Prducto \n 2 - Ver producto \n 3 - Borrar producto \n 0 -  Salir `));

    switch (option) {
        case 1:
            const productos = Number(prompt('Ingrese el producto que desea agregar \n 1 - Televisor \n 2 - Celular\n 3 - Heladera \n 4 - Aspiradora'))
            
            break;
        case 2:
            getAllPrductos()
            break;
        case 3:
            let deleteID = Number(prompt('Ingrese el ID del producto a eliminar \n 1 - Televisor \n 2 - Celular\n 3 - Heladera \n 4 - Aspiradora'));
                deletePrductos(deleteID);
            break;
        case 0:
                alert('Gracias por su visita')
            break;
    
        default:
                alert('La opción ingresada no es correcta')
            break;
    }
}
    
    function deletePrductos(id) {
    productos = productos.filter(producto => producto.id !== id); 
    }
    function getAllPrductos() {
            console.log('\n------------------------------\n');
            productos.forEach((producto) => console.log(producto.id + " - " + producto.producto + " - " + producto.marca + " - " + producto.color));
        }
    productos.forEach(function(id, producto,marca, color) {
            console.log(id, producto,marca, color);
    })
    let elementoEliminado = productos.deletePrductos(deleteID)