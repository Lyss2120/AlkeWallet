const signupForm = document.getElementById("signUpForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  const nombre = document.getElementById("nombre").value; // Capitaliza la primera letra del nombre
  const email = document.getElementById("email").value.toLowerCase(); // Convierte el email a minúsculas
  const contraseña = document.getElementById("contraseña").value;

  //   recupera los usuarios guardados en el localStorage, si no hay usuarios guardados, se inicializa como un array vacío
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);
  userExists ? (alert("El usuario ya existe"), (location.href = "login.html"))
    : // agrega el nuevo usuario al array de usuarios para guardarlo en el localStorage en formato JSON
      (alert("Usuario creado con éxito"),
      users.push({ nombre, email, contraseña }),
      localStorage.setItem("users", JSON.stringify(users)),
      console.log("usuario creado", nombre, email, contraseña),
      (location.href = "menu.html"));
});
// finalmente redirecciona al menú principal