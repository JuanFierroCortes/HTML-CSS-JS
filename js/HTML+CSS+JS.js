// 1. SELECCIÓN: Buscamos el formulario
var formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(evento) {
    
    // Pausamos el envío
    evento.preventDefault(); 

    // Atrapamos lo que el usuario escribió en los campos usando querySelector
    var nombre = document.querySelector('[name="nombres"]').value;
    var password = document.querySelector('[name="password"]').value;

    // 2. VALIDACIÓN (Lógica): Verificamos si la contraseña cumple la regla
    // Sabemos que el HTML pide 16 caracteres, pero validémoslo también con JS
    if (password.length < 16) {
        
        // 3. MANIPULACIÓN DEL DOM: Crear un mensaje de error en la página
        // a) Creamos una etiqueta <p> (párrafo) nueva
        var parrafoError = document.createElement("p"); 
        
        // b) Le damos color rojo para que parezca un error
        parrafoError.style.color = "red";
        parrafoError.style.fontWeight = "bold";
        
        // c) Creamos el texto del mensaje
        var nodoTexto = document.createTextNode("Error: La contraseña debe tener al menos 16 caracteres."); 
        
        // d) Metemos el texto dentro del párrafo
        parrafoError.appendChild(nodoTexto); 
        
        // e) Agregamos este nuevo párrafo al final de nuestro formulario
        formulario.appendChild(parrafoError); 

    } else {
        // Si todo está correcto, el mensaje es positivo
        var parrafoExito = document.createElement("p");
        parrafoExito.style.color = "green";
        var textoExito = document.createTextNode("¡Excelente " + nombre + "! Datos validados correctamente.");
        parrafoExito.appendChild(textoExito);
        
        formulario.appendChild(parrafoExito);
        
    }
});