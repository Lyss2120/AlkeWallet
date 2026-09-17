
const navLinkLogin = document.querySelector(".login");
const navLinks = document.querySelectorAll(".nav-link");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const saludo = document.querySelector("#saludo");


// switch login logout
if (currentUser) {
    saludo.textContent = `Bienvenido ${currentUser.nombre}`;

    // SI EL USUARIO EXISTE: Transforma el botón de Login en uno de Logout
    navLinkLogin.style.display = "block"; // Asegura que sea visible
    navLinkLogin.textContent = "Logout";
    navLinkLogin.className="btn btn-outline-light rounded-pill px-3 fw-semibold text-light opacity-75";

    // Agrega el evento para cerrar sesión
    navLinkLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const confirmLogout = prompt("¿Estás seguro de que quieres cerrar sesión? (s/n)");
        if (confirmLogout === "s") {
            localStorage.removeItem("currentUser"); // Borra el usuario
            console.log("sesion cerrada", currentUser);
            location.href === "index.html" ? location.href = "index.html" : location.href = "../index.html";
        }

    });

} else {
    // SI NO HAY USUARIO: Muestra el botón normal para ir a iniciar sesión
    navLinkLogin.style.display = "block";
    navLinkLogin.classList.add("btn btn-outline-success rounded-pill px-3 fw-semibold text-success opacity-75")
    navLinkLogin.textContent = "Ingresar";
    // inhabilita los links de menu, deposit, sendMoney y transactions
    navLinks.forEach(link => {
        if (!link.classList.contains("login")) {
            link.classList.add("d-none");
        }
    });

}

//  Marcar automáticamente como "activa" la página donde se encuentra el usuario
  
const paginaActual = window.location.pathname.split("/").pop();
  
  $(".navbar-nav .nav-link").each(function () {
    const enlace = $(this).attr("href").split("/").pop();
    if (enlace === paginaActual) {
      $(this).addClass("active fw-bold text-success").removeClass("text-light opacity-75");
    }
  });
