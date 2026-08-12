
const navLinkLogin = document.querySelector(".login");
const navLinks = document.querySelectorAll(".nav-link");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const saludo = document.querySelector("#saludo");

if (currentUser) {
    saludo.textContent = `Bienvenido ${currentUser.nombre}`;
}
(() => {
    const nav = document.querySelector('nav');

    if (nav) {
        nav.classList.remove('bg-dark');
        nav.classList.add('glass', 'text-white');
    }
})();

// switch login logout
if (currentUser) {
    // SI EL USUARIO EXISTE: Transforma el botón de Login en uno de Logout
    navLinkLogin.style.display = "block"; // Asegura que sea visible
    navLinkLogin.textContent = "Logout";
    // Agrega el evento para cerrar sesión
    navLinkLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const confirmLogout = prompt("¿Estás seguro de que quieres cerrar sesión?");
        if (confirmLogout === "s") {
            localStorage.removeItem("currentUser"); // Borra el usuario
            console.log("sesion cerrada", currentUser);
            location.href === "index.html" ? location.href = "index.html" : location.href = "../index.html";
        }

    });

} else {
    // SI NO HAY USUARIO: Muestra el botón normal para ir a iniciar sesión
    navLinkLogin.style.display = "block";
    navLinkLogin.textContent = "Login";
    // inhabilita los links de menu, deposit, sendMoney y transactions
    navLinks.forEach(link => {
        if (!link.classList.contains("login") && !link.classList.contains("home")) {
            link.classList.add("disabled");
        }
    });

}