// Función para buscar casos
function buscarCasos() {
    const nombre = document.getElementById('inputNombre').value;
    const carpeta = document.getElementById('inputCarpeta').value;
    const delito = document.getElementById('selectDelito').value;

    // Filtrar datos según criterios de búsqueda (suponiendo que 'datos' es una variable global)
    const resultados = datos.filter((dato) => {
        return (nombre === '' || dato.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
               (carpeta === '' || dato.carpeta.toLowerCase().includes(carpeta.toLowerCase())) &&
               (delito === '' || dato.delito === delito);
    });

    // Actualizar tabla con los resultados de la búsqueda
    const tbody = document.querySelector('#tablaResultados tbody');
    tbody.innerHTML = '';
    resultados.forEach((resultado) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${resultado.nombre}</td>
            <td>${resultado.carpeta}</td>
            <td>${resultado.delito}</td>
            <td>${resultado.fecha}</td>
            <td>${resultado.estado}</td>
            <td><button onclick="verDetalles('${resultado.nombre}')">Ver Detalles</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para mostrar detalles de un caso
function verDetalles(nombre) {
    // Aquí iría la lógica para mostrar los detalles del caso seleccionado
    // Por ahora, solo mostraremos un mensaje de ejemplo
    alert(`Mostrando detalles del caso de ${nombre}`);
}

// Asignar la función buscarCasos al evento click del botón de búsqueda
document.getElementById('btnBuscar').addEventListener('click', buscarCasos);
