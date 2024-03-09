function cargarCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if (cantTotalEntradas() > 0) {
        for (const entrada of carrito) {
            contenido += `<div class="my-1 p-3 entradaEnCarrito">
                <img class="img-fluid" width="200" src="${entrada.imagen}" alt="${entrada.artista}">
                <p>${entrada.artista} - ${entrada.fecha}</p>
                <p>$${entrada.precio}</p>
                <button class="btnEliminarEntrada" onclick="eliminarEntradaDelCarrito(${entrada.id})"><i class="bi bi-trash3-fill"></i></button>
            </div>`;
        }

        contenido += `<div class="my-1 p-1 totalAPagar">
            <p>Total a pagar: $${sumarTotalEntradas()}</p>
        </div>
        <div class="my-3 contenedorBotonesCarrito">
            <button id="btnVaciar" class="btn btnVaciar" onclick="eliminarCarrito()">Vaciar carrito. </button>
            <button id="btnComprar" class="btn btnComprar" onclick="finalizarCompra()">Finalizar compra. </button>
        </div>`;
    } else {
        contenido = `<div class="alert alert-light" role="alert">
            El carrito está vacío, añade entradas para poder comprar.
        </div>`;
    }
    
    document.getElementById("contenedorCarrito").innerHTML = contenido
}

cargarCarrito()
actualizarBotonCarrito()