(() => {
  const loginFormDom = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");

  // si no se captura correctamente el formulario de login
  if (!loginFormDom) return;

  // true si el usuario ha marcado el checkbox anteriormente
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }

  // controla persistencia y autenticación
  loginFormDom.addEventListener("submit", (e) => {
    e.preventDefault(); // Detiene recarga de página

    const emailValue = emailInput.value.toLowerCase().trim();
    const passwordValue = passwordInput.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // verifica si el usuario desmarcó recordarme
    if (!rememberCheckbox.checked) {
      localStorage.removeItem("rememberedEmail");
    } else {
      localStorage.setItem("rememberedEmail", emailValue);
    }

    // Valida que el usuario exista en LocalStorage a falta de Base de datos
    const validUser = users.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );

    if (!validUser) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    // guarda el usuario en currentUser para acceder a sus datos en sesion
    alert("Bienvenido " + validUser.nombre);
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    
    // Redirección
    location.href = "menu.html";
  });
})();


