function cargarEntrada() {
    const entrada = obtenerEntradaLS()
    let contenido = `<div class="my-5 text-center contenedorEntrada">
        <img class="img-fluid imgEntrada" src="${entrada.imagen}" alt="${entrada.artista}"/>
        <p class="card-title tituloEntrada">${entrada.artista} - ${entrada.fecha}</p>
        <p class="card-text">$${entrada.precio}</p>
        <button id="btnAgregar" class="btn btnAgregar" onclick="agregarEntradaAlCarrito()">Agregar al <i class="bi bi-cart-fill"></i> </button>
        <a href="index.html" class="btn btnAgregar">Volver al inicio.</a>
    </div>
    <div>
        <img class="img-fluid imgEscenario" src="imagenes/escenarioAsientos.png" alt="">
    </div>`

    document.getElementById("contenedorEntrada").innerHTML = contenido
}

cargarEntrada()
actualizarBotonCarrito()