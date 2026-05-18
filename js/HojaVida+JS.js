document.addEventListener("DOMContentLoaded", function() {
    
    const botonImprimir = document.getElementById("btn-imprimir");

    botonImprimir.addEventListener("click", function() {
        window.print(); 
    });

});