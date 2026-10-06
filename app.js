// ============================================
// FUNCIÓN 1: SALUDAR
// Lee el nombre del input y muestra un saludo
// ============================================
function saludar() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerHTML = "Por favor, escribe tu nombre";
    } else {
        document.getElementById("resultado").innerHTML = "¡Hola, " + nombre + "! 👋";
    }
}

// ============================================
// FUNCIÓN 2: SUMAR
// Lee los 2 números y los suma
// ============================================
function sumar() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = a + " + " + b + " = " + (a + b);
}

// ============================================
// FUNCIÓN 3: RESTAR
// Lee los 2 números y los resta
// ============================================
function restar() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = a + " - " + b + " = " + (a - b);
}

// ============================================
// FUNCIÓN 4: MULTIPLICAR
// Lee los 2 números y los multiplica
// ============================================
function multiplicar() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = a + " × " + b + " = " + (a * b);
}

// ============================================
// FUNCIÓN 5: DIVIDIR
// Lee los 2 números y los divide
// Valida que no se divida entre 0
// ============================================
function dividir() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    if (b === 0) {
        document.getElementById("resultado").innerHTML = "❌ No se puede dividir entre 0";
    } else {
        document.getElementById("resultado").innerHTML = a + " ÷ " + b + " = " + (a / b);
    }
}

// ============================================
// FUNCIÓN 6: MOSTRAR FECHA
// Muestra la fecha actual del sistema
// ============================================
function mostrarFecha() {
    var fecha = new Date().toLocaleDateString();
    document.getElementById("resultado").innerHTML = "📅 Hoy es: " + fecha;
}

// ============================================
// FUNCIÓN 7: MOSTRAR HORA
// Muestra la hora actual del sistema
// ============================================
function mostrarHora() {
    var hora = new Date().toLocaleTimeString();
    document.getElementById("resultado").innerHTML = "🕐 Hora: " + hora;
}

// ============================================
// FUNCIÓN 8: CAMBIAR COLOR
// Cambia el color de fondo de la página a azul
// ============================================
function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("resultado").innerHTML = "🎨 Color de fondo cambiado a azul";
}

// ============================================
// FUNCIÓN 9: QUITAR COLOR
// Vuelve el fondo a blanco
// ============================================
function quitarColor() {
    document.body.style.backgroundColor = "";
    document.getElementById("resultado").innerHTML = "🧹 Color de fondo quitado";
}

// ============================================
// FUNCIÓN 10: MAYÚSCULAS
// Convierte el nombre a mayúsculas
// ============================================
function mayusculas() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerHTML = "Por favor, escribe tu nombre";
    } else {
        document.getElementById("resultado").innerHTML = nombre.toUpperCase();
    }
}

// ============================================
// FUNCIÓN 11: MINÚSCULAS
// Convierte el nombre a minúsculas
// ============================================
function minusculas() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerHTML = "Por favor, escribe tu nombre";
    } else {
        document.getElementById("resultado").innerHTML = nombre.toLowerCase();
    }
}

// ============================================
// FUNCIÓN 12: LONGITUD
// Cuenta cuántos caracteres tiene el nombre
// ============================================
function longitud() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("resultado").innerHTML = "Por favor, escribe tu nombre";
    } else {
        document.getElementById("resultado").innerHTML = "Tu nombre tiene " + nombre.length + " caracteres";
    }
}

// ============================================
// FUNCIÓN 13: DOBLE
// Muestra el doble del número 1
// ============================================
function doble() {
    var num = parseFloat(document.getElementById("num1").value);
    document.getElementById("resultado").innerHTML = "El doble de " + num + " es " + (num * 2);
}

// ============================================
// FUNCIÓN 14: LIMPIAR
// Resetea todos los inputs y el fondo
// ============================================
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("num1").value = "0";
    document.getElementById("num2").value = "0";
    document.getElementById("resultado").innerHTML = "🧹 Todo limpio";
    document.body.style.backgroundColor = "";
}

// ============================================
// FUNCIÓN 15: MOSTRAR TODO
// Muestra todos los datos de los inputs
// ============================================
function mostrarTodo() {
    var nombre = document.getElementById("nombre").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML = 
        "📋 <strong>Datos actuales:</strong><br>" +
        "Nombre: " + nombre + "<br>" +
        "Número 1: " + num1 + "<br>" +
        "Número 2: " + num2;
}