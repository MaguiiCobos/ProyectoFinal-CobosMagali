
const obtenerEntradasLS = () => {
    return JSON.parse(localStorage.getItem("entradas")) || []    //en caso de q no exista carga un array vacio
}

const cargarCarritoLS = (entradas) => {
    localStorage.setItem("carrito", JSON.stringify(entradas))
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

const obtenerIdEntradaLS = () => {
    return JSON.parse(localStorage.getItem("entrada")) || 0    //en caso de q no exista carga un cero
}

const cantTotalEntradas = () => {
    const carrito = obtenerCarritoLS()
    return carrito.length
}

const cantEntradasPorId = (entradas, cant) => {
    entradas.cantidad = cant
    console.log(entradas)
}

const sumarTotalEntradas = () => {
    const carrito = obtenerCarritoLS();
    return carrito.reduce((acumulador, ent) => acumulador += ent.precio, 0);
}

const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    cargarCarrito();
    totalCarrito();
    notificar("Carrito vacio!");
}

const totalCarrito = () => {
    document.getElementById("numerito").innerHTML = cantTotalEntradas()
}

const verEntrada = (id) => {
    localStorage.setItem("entrada", JSON.stringify(id))
}

const obtenerEntradaLS = () => {
    const entradas = obtenerEntradasLS()
    const id = obtenerIdEntradaLS()
    const entrada = entradas.find(ent => ent.id === id)
    return entrada;
}

const obtenerIdCategoriaLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "todos"
}

const entradaPorCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
}

const buscarEntrada = () => {
    const entradas = obtenerEntradasLS();
    const id = obtenerIdEntradaLS();
    const entrada = entradas.find(ent => ent.id === id);
    return entrada;
}

const agregarEntradaAlCarrito = () => {
    const entrada = buscarEntrada();
    const carrito = obtenerCarritoLS();
    carrito.push(entrada);
    cargarCarritoLS(carrito);
    totalCarrito();
    notificar("Entrada Agregada!");
}

const eliminarEntradaDelCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(ent => ent.id != id);
    cargarCarritoLS(carritoActualizado);
    cargarCarrito();
    totalCarrito();
    notificar("Entrada eliminada!");
}

const actualizarBotonCarrito = () => {
    document.getElementById("numerito").innerHTML = cantTotalEntradas();
}

const finalizarCompra = () => {
    Swal.fire({
        position: "center",
        title: "¿Desea finalizar la compra?",
        showCancelButton: true,
        confirmButtonColor: "#03A239",
        cancelButtonColor: "#d33",
        confirmButtonText: "Comprar",
        cancelButtonText: "No comprar"
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra exitosa!",
            text: "Gracias por tu compra, esperamos verte pronto!",
            icon: "success"
          });
          eliminarCarrito()
        }
    });
}

const notificar = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style:{
            background: "white",
            color: "black"
        }
    }).showToast();
}
