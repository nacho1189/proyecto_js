


// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('carrito')){
//         carrito = JSON.parse(localStorage.getItem('carrito'))
//         actualizarCarrito()
//     }
// })
let storage=localStorage.getItem('carrito');
storage? carrito=JSON.parse(storage): actualizarCarrito;
