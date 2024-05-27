// Función para realizar la búsqueda en la tabla
function buscar() {
    // Obtener los valores de los campos de búsqueda
    var nombre = document.getElementById("inputNombre").value.toLowerCase();
    var carpeta = document.getElementById("inputCarpeta").value.toLowerCase();
    var filas = document.querySelectorAll("#tablaResultados tbody tr");// Obtener las filas de la tabla

    // Iterar sobre las filas y mostrar u ocultar según los criterios de búsqueda
    filas.forEach(function (fila) {
        var nombreFila = fila.getElementsByTagName("td")[0].textContent.toLowerCase();
        var carpetaFila = fila.getElementsByTagName("td")[1].textContent.toLowerCase();

        // Verificar si el nombre de la fila o la carpeta coinciden con los criterios de búsqueda
        if (nombreFila.includes(nombre) && carpetaFila.includes(carpeta)) {
            
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}

// Función para limpiar la búsqueda
function limpiarBusqueda() {
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputCarpeta").value = "";
    buscar(); // Volver a mostrar todas las filas
}

// Obtener los elementos de búsqueda y el botón de limpiar búsqueda
var inputNombre = document.getElementById("inputNombre");
var inputCarpeta = document.getElementById("inputCarpeta");
var btnBuscar = document.getElementById("btnBuscar");
var btnLimpiar = document.getElementById("btnLimpiar");

// Agregar eventos de escucha
inputNombre.addEventListener("input", buscar);
inputCarpeta.addEventListener("input", buscar);
btnBuscar.addEventListener("click", buscar);
btnLimpiar.addEventListener("click", limpiarBusqueda);
