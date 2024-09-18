$(document).ready(function() {
    // Manejar el clic en un elemento de menú con submenú
    $(".Menu > ul > li").click(function(e) {
        e.preventDefault(); // Prevenir la acción por defecto del enlace

        // Alternar la visibilidad del submenú
        $(this).find("ul").slideToggle();

        // Mostrar solo el submenú del elemento clicado y ocultar los submenús de los demás elementos
        $(this).siblings().find("ul").slideUp();
        
        // Alternar la clase 'Activado' en el elemento clicado
        $(this).toggleClass("Activado");

        // Asegurarse de que solo un elemento tenga la clase 'Activado'
        $(this).siblings().removeClass("Activado");
    });

    // Manejar el clic en el botón de la barra lateral
    $(".Menu_Boton").click(function (){
        $(".Barra_Lateral").toggleClass("active");
    });
});
