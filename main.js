
let productos1 = [
    {id: 1, nombre: "Heladera LG", tipo: "Heladera", cantidad: 1, desc: "", precio: 1200,  img: './img/heladeralg.jpg'},
    {id: 2, nombre: "Samsung Smart Tv 43", tipo: "Tele", cantidad: 1, desc: "", precio: 1100, img: './img/samsung-tv.jpg'},
    {id: 3, nombre: "Iphone 11", tipo: "Celular", cantidad: 1, desc: "", precio: 1200, img: './img/celular_iphone_11.jpg'},
]

let productos2 = [
    {id: 4, nombre: "Tarjeta Grafica", tipo: "Componente para PC", cantidad: 1, desc: "", precio: 900,  img: './img/Grafica.jpg'},
    {id: 5, nombre: "Laptop HP", tipo: "Laptop", cantidad: 1, desc: "", precio: 1400, img: './img/laptopHP.jpg'},
    {id: 6, nombre: "Computador Gamer", tipo: "PC", cantidad: 1, desc: "", precio: 2200, img: './img/pc1.jpg'},
    {id: 7, nombre: "Silla Gamer", tipo: "Silla", cantidad: 1, desc: "", precio: 300,  img: './img/sillagamer.jpg'},
    {id: 8, nombre: "Escritorio Gamer", tipo: "Escritorio", cantidad: 1, desc: "", precio: 360, img: './img/escritorio.jpg'},
]


let productos=[...productos1,...productos2,];


const contenedorProductos = document.getElementById('contenedor-productos')


const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')



const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    //operador terneario
    let storage=localStorage.getItem('carrito');
    storage? carrito=JSON.parse(storage): actualizarCarrito;
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:USD ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    
    const boton = document.getElementById(`agregar${producto.id}`)
    

    boton.addEventListener('click', () => {
   
        agregarAlCarrito(producto.id)
       
    })
})


const agregarAlCarrito = (prodId) => {

    
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    Swal.fire({
        title: 'Genial ????!',
        text: 'Haz agrgado un producto al Carrito!',
        icon: 'success',
        confirmButtonText: '????'
    })
    actualizarCarrito() 
    console.log(agregarAlCarrito);
}



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 

    actualizarCarrito() 
    Swal.fire({
        title: 'Que mal no lo vas a llevar ????!',
        text: 'Haz eliminado un producto de Carrito correctamente!',
        icon: 'success',
        confirmButtonText: '????'
    })
    console.log(carrito)
}


const actualizarCarrito = () => {
   
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:USD${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
   
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  
}


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})