var formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(evento) {
    
    evento.preventDefault(); 

    var nombre = document.querySelector('[name="nombres"]').value;
    var password = document.querySelector('[name="password"]').value;

    if (password.length < 16) {
        
        var parrafoError = document.createElement("p"); 
        
        parrafoError.style.color = "red";
        parrafoError.style.fontWeight = "bold";
        
        var nodoTexto = document.createTextNode("Error: La contraseña debe tener al menos 16 caracteres."); 
        
        parrafoError.appendChild(nodoTexto); 
        
        formulario.appendChild(parrafoError); 

    } else {
        var parrafoExito = document.createElement("p");
        parrafoExito.style.color = "green";
        var textoExito = document.createTextNode("¡Excelente " + nombre + "! Datos validados correctamente.");
        parrafoExito.appendChild(textoExito);
        
        formulario.appendChild(parrafoExito);
        
    }
});
