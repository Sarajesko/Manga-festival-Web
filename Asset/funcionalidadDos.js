


// Mostrar la sección Festival por defecto al cargar la página
window.onload = function() {
    document.getElementById("seccionUna").style.display = "block"; // Festival visible
    document.getElementById("seccionDos").style.display = "none";  // Comic oculto
    document.getElementById("seccionTres").style.display = "none"; // Plano oculto
    document.getElementById("seccionCuatro").style.display = "none"; // Reserva oculto
}



// Funciones para cambiar de sección al pulsar botones
function abrePaginaUno(){
    document.getElementById("seccionUna").style.display = "block";
    document.getElementById("seccionDos").style.display = "none";
    document.getElementById("seccionTres").style.display = "none";
    document.getElementById("seccionCuatro").style.display = "none";
}

function abrePaginaDos(){
    document.getElementById("seccionUna").style.display = "none";
    document.getElementById("seccionDos").style.display = "block";
    document.getElementById("seccionTres").style.display = "none";
    document.getElementById("seccionCuatro").style.display = "none";
}

function abrePaginaTres(){
    document.getElementById("seccionUna").style.display = "none";
    document.getElementById("seccionDos").style.display = "none";
    document.getElementById("seccionTres").style.display = "block";
    document.getElementById("seccionCuatro").style.display = "none";
}

function abrePaginaCuatro(){
    document.getElementById("seccionUna").style.display = "none";
    document.getElementById("seccionDos").style.display = "none";
    document.getElementById("seccionTres").style.display = "none";
    document.getElementById("seccionCuatro").style.display = "block";
}




// --- Función fechaHoy según tu código ---
function fechaHoy() {
    let fechaactual;
    let diasemana;
    let diasemanatxt;

    let mesactual;
    let mesactualtxt;

    let anio;
    let dia;

    fechaactual = new Date();

    // DIA DE LA SEMANA
    diasemana = fechaactual.getDay();

    // Año actual
    anio = fechaactual.getFullYear();

    // Dia del mes
    dia = fechaactual.getDate();

    // MES
    mesactual = fechaactual.getMonth();
    mesactualtxt = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    diasemanatxt = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    diasemana = diasemanatxt[diasemana];
    mesactual = mesactualtxt[mesactual];

    // Mostrar en HTML
    document.getElementById("laHora").innerHTML = " " + diasemana + ", día " + dia + " de " + mesactual + " de " + anio;
}

// Ejecutar la función cuando el HTML esté cargado
document.addEventListener("DOMContentLoaded", function() {
    fechaHoy();
});


function validaFormulario() {
    let envio = true; // bandera para enviar o no
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let edad = document.getElementById("edad").value.trim();

    let expreg;

    // --- Validar Nombre ---
    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML = "El campo nombre es obligatorio";
        envio = false;
    } else {
        expreg = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,20}$/;
        if (!expreg.test(nombre)) {
            document.getElementById("errorNombre").innerHTML = "El formato es incorrecto"; 
            envio = false;
        } else {
            document.getElementById("errorNombre").innerHTML = ""; 
        }
    }

    // --- Validar Apellido ---
    if (apellido === "") {
        document.getElementById("errorApellido").innerHTML = "El campo apellido es obligatorio";
        envio = false;
    } else {
        expreg = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,20}( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,20})?$/;
        if (!expreg.test(apellido)) {
            document.getElementById("errorApellido").innerHTML = "El formato es incorrecto"; 
            envio = false;
        } else {
            document.getElementById("errorApellido").innerHTML = ""; 
        }
    }

    // --- Validar Email ---
    if (email === "") {
        document.getElementById("errorEmail").innerHTML = "El campo email es obligatorio";
        envio = false;
    } else {
        expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!expreg.test(email)) {
            document.getElementById("errorEmail").innerHTML = "El formato es incorrecto"; 
            envio = false;
        } else {
            document.getElementById("errorEmail").innerHTML = ""; 
        }
    }

    // --- Validar Edad ---
    if (edad === "") {
        document.getElementById("errorEdad").innerHTML = "La edad es obligatoria";
        envio = false;
    } else if (parseInt(edad) < 18) {
        document.getElementById("errorEdad").innerHTML = "Debes ser mayor de 18 años";
        envio = false;
    } else {
        document.getElementById("errorEdad").innerHTML = ""; 
    }

    // --- Retornar resultado ---
    return envio; // true si todo está correcto, false si hay errores
}

// Si lo pongo arriba me fastidia la hora//
function hoverBoton(elemento) {
elemento.style.backgroundColor ="#deb887"
elemento.style.color ="#a52a2a"
}

function hoverBotonDos(elemento) {
elemento.style.backgroundColor ="#a52a2a"
elemento.style.color ="#deb887"
}


