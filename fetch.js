const lista = document.getElementById('contenedor-productos')
fetch('/fetch.json')
.then( (res) => res.json())
.then( (productos) => {

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
})