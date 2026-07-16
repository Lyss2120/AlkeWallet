
const navBar = document.querySelector(".navbar");
const navLinkLogin = document.querySelector(".login");
const navLinkHome = document.querySelector(".home");
const navLinks = document.querySelectorAll(".nav-link");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;


(() => {
    const nav = document.querySelector('nav');

    if (nav) {
        // 1. Remueve la clase vieja
        nav.classList.remove('bg-dark');

        // 2. Agrega la clase nueva
        nav.classList.add('bg-light-subtle');
    }
})();

// 2. Lógica de control de acceso
if (currentUser) {

    navLinkLogin.style.display = "block"; // Asegura que sea visible
    navLinkLogin.textContent = "foto " + currentUser.name;
    navLinkLogin.href = "#"; // Evita que navegue a otra página al hacer clic

    // Agrega el evento para cerrar sesión
    navLinkLogin.addEventListener("click", (e) => {
        e.preventDefault();
        // SI EL USUARIO EXISTE: Transforma el botón de Login en uno de Logout
        navLinkLogin.style.display = "block"; // Asegura que sea visible
        navLinkLogin.textContent = "Logout";
        navLinkLogin.href = "#"; // Evita que navegue a otra página al hacer clic

        const confirmLogout = prompt("¿Estás seguro de que quieres cerrar sesión?");
        if (confirmLogout === "s") {
            localStorage.removeItem("currentUser"); // Borra el usuario
                        console.log("sesion cerrada", currentUser);

            location.reload(); // Recarga la página para actualizar la vista
            // SI NO HAY USUARIO: Muestra el botón normal para ir a iniciar sesión
            // navLinkLogin.style.display = "block";
            // navLinkLogin.textContent = "Login";
            // navLinkLogin.href = "login.html";
            // // inhabilita los links de menu, deposit, sendMoney y transactions
            // navLinks.forEach(link => {
            //     if (!link.classList.contains("login") || !link.classList.contains("home")) {
            //         link.classList.add(" disabled");
            //     }
            // });
        }


    });

} else {
    // SI NO HAY USUARIO: Muestra el botón normal para ir a iniciar sesión
    navLinkLogin.style.display = "block";
    navLinkLogin.textContent = "Login";
    navLinkLogin.href = "login.html";
    // inhabilita los links de menu, deposit, sendMoney y transactions
    navLinks.forEach(link => {
        if (!link.classList.contains("login") || !link.classList.contains("home")) {
            link.classList.add(" disabled");
        }
    });

}