const loginFormDom = document.getElementById("loginForm");





loginFormDom.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.toLowerCase(); // Convierte el email a minúsculas
  const passwordInput = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];

  console.log(emailInput, passwordInput, users);

  const validUser = users.find((user) => user.email === emailInput && user.password === passwordInput);
  if (!validUser) {
    alert("Usuario o contraseña incorrectos");
    return;
  } else {
    alert("Bienvenido " + validUser.nombre);
    // Guardar el usuario actual en la sesión. usar const currentUser en las demas paginas para mostrar el avatar y el saludo
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    // redireciona a menu
    location.href = "menu.html";
  }
})


// verificar codigo para recORDARME VS NO RECORDAR USANDO EL USUARIO SOLO EN ESA SESION O EN EL LOCALSTORAGE PARA QUE NO SE PIERDA AL CERRAR EL NAVEGADOR, SI ESTA GUARDADO AL ENTRAR A LA PAG NO DEBERIA PEDIR LOGIN  SINO RECONOCER DE INMEDIATO AL USUARIO CON SU AVATRA Y SALUDO
