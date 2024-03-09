function cargarEntradas() {
    fetch('./js/entradas.json')
    .then(respuesta => respuesta.json())
    .then(entradas => {

        localStorage.setItem("entradas", JSON.stringify(entradas))
        const categoria = obtenerIdCategoriaLS();
        const entradasFiltradas = categoria === "todos" ? entradas : entradas.filter(ent => ent.categoria === categoria);
        let contenido = "";

        for (const entrada of entradasFiltradas) {
            contenido += `<div class="col my-3">
                <a href="entrada.html" onclick="verEntrada(${entrada.id});" class="entrada">
                    <div class="card h-100">
                        <img src="${entrada.imagen}" class="card-img-top imgEntrada" alt="${entrada.imagen}">
                        <div class="card-body">
                            <h5 class="card-title tituloEntrada">${entrada.artista} - ${entrada.fecha}</h5>
                            <p class="card-text precio">$${entrada.precio}</p>
                        </div>
                    </div>
                </a>
            </div>
            `
        }

        document.getElementById("contenedorEntradas").innerHTML = contenido;
    })
    .catch(error => {
        document.getElementById("contenedorEntradas").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">Error! No se encuentra la entrada a la que desea acceder!</div>`;
    })
}

cargarEntradas()
actualizarBotonCarrito()