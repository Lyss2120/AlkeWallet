
currentUser ? (console.log("menu", currentUser)) : location.href = "login.html";
const balance = document.getElementById("balance");

currentUser.balance ? balance.textContent = currentUser.balance.toLocaleString("es-CL") : balance.textContent = "0".toLocaleString("es-CL");