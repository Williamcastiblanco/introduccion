function moverIzquierda() {
    var contenedor = document.getElementById("slide-container");
    var imagenActual = contenedor.scrollLeft;
    var anchoImagen = contenedor.offsetWidth;
    contenedor.scrollLeft = imagenActual - anchoImagen;
}

function moverDerecha() {
    var contenedor = document.getElementById("slide-container");
    var imagenActual = contenedor.scrollLeft;
    var anchoImagen = contenedor.offsetWidth;
    contenedor.scrollLeft = imagenActual + anchoImagen;
}

var contador = 0;
function incrementarContador() {
    contador++;
    document.getElementById('contador').innerHTML = contador;
}

function mostrarAlerta() {
    document.getElementById("miAlerta").style.display = "block";
}

function cerrarAlerta() {
    document.getElementById("miAlerta").style.display = "none";
}