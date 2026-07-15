const loginFormDom = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password")

loginFormDom.addEventListener("submit", (event) => {
  event.preventDefault();
  
const users = JSON.parse(localStorage.getItem("users")) || [];
console.log({users})
const validUser = users.find((user) => user.email === emailInput.value && user.password === passwordInput.value);
if (!validUser) {
  alert("Usuario o contraseña incorrectos");
} else {
  alert("Bienvenido " + validUser.nombre);
    // Guardar el usuario actual en la sesión. usar const currentUser en las demas paginas para mostrar el avatar y el saludo
  localStorage.setItem("currentUser", JSON.stringify(validUser));
  
  location.href = "menu.html";
}})
