
currentUser ? (console.log("menu", currentUser)) : location.href = "login.html";
const balance = document.getElementById("balance");
const balanceSpan = document.getElementById("balance");

const saldoActual = currentUser.balance;
// mostrar saldo cuenta balnac.toLocaleString("es-CL")
balanceSpan.textContent += `$ ${saldoActual.toLocaleString("es-CL")}`;

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))