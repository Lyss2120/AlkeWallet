const user = JSON.parse(localStorage.getItem("currentUser"));



$(document).ready(function() {
    // ya funciona
    console.log("¡Sí, jQuery está funcionando correctamente! 🎉");

    // 
    $("h1").css("color", "turquoise");
    console.log("El color del título principal ha sido cambiado a verde éxito.");
    // ==========================================
    // EFFECT 1: Parallax Suave en los Orbes de Fondo
    // ==========================================
    // Los orbes reaccionan sutilmente al movimiento del mouse, dando profundidad 3D
    $(document).on("mousemove", function (e) {
        let mouseX = e.pageX;
        let mouseY = e.pageY;

        // Orbe 1 se mueve ligeramente hacia un lado
        $(".orbe-1").css({
            "transform": `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`
        });
        // Orbe 2 se mueve en dirección contraria
        $(".orbe-2").css({
            "transform": `translate(${-mouseX * 0.015}px, ${-mouseY * 0.015}px)`
        });
        // Orbe 3 tiene un movimiento vertical más marcado
        $(".orbe-3").css({
            "transform": `translate(${mouseX * 0.01}px, ${-mouseY * 0.03}px)`
        });
    });

    // ==========================================
    // EFFECT 2: Animación al hacer Scroll (Fade In)
    // ==========================================
    // Las secciones de "Beneficios" y "Confianza" aparecen suavemente al bajar la página
    const secciones = $("main > section");
    
    // Ocultamos las secciones inicialmente y les damos una transición CSS
    secciones.css({
        "opacity": "0",
        "transform": "translateY(40px)",
        "transition": "all 0.8s ease-out"
    });

    function verificarScroll() {
        const scrollTop = $(window).scrollTop();
        const alturaVentana = $(window).height();

        secciones.each(function () {
            const posicionElemento = $(this).offset().top;
            
            // Si el elemento entra en el campo de visión del usuario, se muestra
            if (scrollTop + alturaVentana > posicionElemento + 100) {
                $(this).css({
                    "opacity": "1",
                    "transform": "translateY(0)"
                });
            }
        });
    }

    // Ejecutar al cargar la página y cada vez que el usuario hace scroll
    verificarScroll();
    $(window).on("scroll", verificarScroll);

    // ==========================================
    // EFFECT 3: Efecto de Brillo (Glow) en Tarjetas de Testimonios
    // ==========================================
    // Al pasar el mouse por las cards, se intensifica el borde verde de éxito
    $(".testimonios .card").hover(
        function () {
            $(this).css({
                "transform": "translateY(-8px)",
                "border": "1px solid rgba(25, 135, 84, 0.5)", // Borde sutil text-success
                "box-shadow": "0 10px 25px rgba(25, 135, 84, 0.2)", // Brillo verde
                "transition": "all 0.3s ease"
            });
        },
        function () {
            $(this).css({
                "transform": "translateY(0)",
                "border": "0px solid transparent",
                "box-shadow": "0 1rem 3rem rgba(0, 0, 0, 0.175)" // Sombra shadow-lg nativa
            });
        }
    );
});

