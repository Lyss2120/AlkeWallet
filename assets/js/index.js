const user = JSON.parse(localStorage.getItem("currentUser"));



$(document).ready(function() {
    // 1. Esto mostrará una ventana flotante de alerta al cargar
    alert("¡Sí, jQuery está funcionando correctamente! 🎉");

    // 2. Esto cambiará el color de tu título principal a verde éxito
    $("h1").css("color", "#198754");
    console.log("El color del título principal ha sido cambiado a verde éxito.");
});

