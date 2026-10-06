// ============================================
// FUNCIÓN 1: SALUDAR
// Lee el nombre del input y muestra un saludo
// ============================================
function saludar() {
    // Obtiene el valor escrito en el input con id="nombre"
    var nombre = document.getElementById("nombre").value;
    // Muestra el saludo en el div con id="resultado"
    document.getElementById("resultado").innerHTML = "Hola, " + nombre + "!";
}

// ============================================
// FUNCIÓN 2: SUMAR
// Lee los 2 números y los suma
// ============================================
function sumar() {
    // parseFloat convierte el texto del input a número decimal
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    // Muestra la operación y el resultado
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
    document.getElementById("resultado").innerHTML = a + " x " + b + " = " + (a * b);
}

// ============================================
// FUNCIÓN 5: DIVIDIR
// Lee los 2 números y los divide
// Valida que no se divida entre 0
// ============================================
function dividir() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    
    // Si el segundo número es 0, muestra error
    if (b === 0) {
        document.getElementById("resultado").innerHTML = "No se puede dividir entre 0";
    } else {
        // Si no es 0, muestra la división
        document.getElementById("resultado").innerHTML = a + " / " + b + " = " + (a / b);
    }
}

// ============================================
// FUNCIÓN 6: MOSTRAR FECHA
// Muestra la fecha actual del sistema
// ============================================
function mostrarFecha() {
    // new Date() crea un objeto con la fecha/hora actual
    // toLocaleDateString() lo convierte a formato local (ej: "6/10/2026")
    var fecha = new Date().toLocaleDateString();
    document.getElementById("resultado").innerHTML = "Hoy es: " + fecha;
}

// ============================================
// FUNCIÓN 7: MOSTRAR HORA
// Muestra la hora actual del sistema
// ============================================
function mostrarHora() {
    // toLocaleTimeString() convierte la fecha a formato de hora
    var hora = new Date().toLocaleTimeString();
    document.getElementById("resultado").innerHTML = "Hora: " + hora;
}

// ============================================
// FUNCIÓN 8: CAMBIAR COLOR
// Cambia el color de fondo de la página a azul
// ============================================
function cambiarColor() {
    // document.body accede al elemento <body> de la página
    // style.backgroundColor cambia el color de fondo
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("resultado").innerHTML = "Color cambiado a azul";
}

// ============================================
// FUNCIÓN 9: QUITAR COLOR
// Vuelve el fondo a blanco
// ============================================
function quitarColor() {
    document.body.style.backgroundColor = "white";
    document.getElementById("resultado").innerHTML = "Color quitado";
}

// ============================================
// FUNCIÓN 10: MAYÚSCULAS
// Convierte el nombre a mayúsculas
// ============================================
function mayusculas() {
    var nombre = document.getElementById("nombre").value;
    // toUpperCase() convierte todo el texto a mayúsculas
    document.getElementById("resultado").innerHTML = nombre.toUpperCase();
}

// ============================================
// FUNCIÓN 11: MINÚSCULAS
// Convierte el nombre a minúsculas
// ============================================
function minusculas() {
    var nombre = document.getElementById("nombre").value;
    // toLowerCase() convierte todo el texto a minúsculas
    document.getElementById("resultado").innerHTML = nombre.toLowerCase();
}

// ============================================
// FUNCIÓN 12: LONGITUD
// Cuenta cuántos caracteres tiene el nombre
// ============================================
function longitud() {
    var nombre = document.getElementById("nombre").value;
    // .length cuenta los caracteres de un texto
    document.getElementById("resultado").innerHTML = "Tu nombre tiene " + nombre.length + " caracteres";
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
    // Pone los inputs vacíos o en 0
    document.getElementById("nombre").value = "";
    document.getElementById("num1").value = "0";
    document.getElementById("num2").value = "0";
    // Resetea el resultado
    document.getElementById("resultado").innerHTML = "Todo limpio";
    // Resetea el fondo
    document.body.style.backgroundColor = "white";
}

// ============================================
// FUNCIÓN 15: MOSTRAR TODO
// Muestra todos los datos de los inputs
// ============================================
function mostrarTodo() {
    // Lee los valores de los 3 inputs
    var nombre = document.getElementById("nombre").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // Muestra los 3 valores juntos, <br> es un salto de línea en HTML
    document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br>Número 1: " + num1 + "<br>Número 2: " + num2;
}