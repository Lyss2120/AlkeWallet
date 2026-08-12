document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const transactionList = document.querySelectorAll(
    "#transactions-ul .list-group-item",
  );
  const balanceSpan = document.getElementById("balance");

  const saldoActual = currentUser.balance ? currentUser.balance : "0";
  console.log(saldoActual.toLocaleString("es-CL"));

  // mostrar saldo cuenta balnac.toLocaleString("es-CL")
  balanceSpan.textContent += saldoActual.toLocaleString("es-CL");
console.log(currentUser)
// agregar las transacciones  en cada js q las afecte o ver donde
  currentUser?.transactions?.forEach((transaction) => {
    transactionList += `li class="list-group-item list-group-item-action contacto-item">${transaction}</li>`
    
  });

  //   transactionList.forEach((item) => {
  //     const text = item.textContent;

  //     // Extraer el monto numérico limpiando el signo $ y los espacios
  //     const amountMatch = text.match(/\$\s*([\d.]+)/);
  //     if (!amountMatch) return;

  //     const amount = parseFloat(amountMatch[1]);

  //     // identifica si la transacción es de entrada o salida
  //     const textLower = text.toLowerCase();
  //     const isIncome = textLower.includes("deposito") || textLower.includes("transferencia");
  // // agrega clase para que cambie el color de la fila dependiendo de entrada o salida de dinero
  //     if (isIncome) {
  //       totalBalance += amount;
  //       item.classList.add("list-group-item-success");
  //     } else {
  //       totalBalance -= amount;
  //       item.classList.add("list-group-item-danger");
  //     }
  //   });

  //   // Formatear el resultado a CLP
  //   balanceSpan.textContent = totalBalance.toLocaleString("es-CL");

  //   // Cambiar el color del balance si es negativo
  //   if (totalBalance < 0) {
  //     balanceSpan.parentElement.classList.add("text-danger");
  //   } else {
  //     balanceSpan.parentElement.classList.add("text-success");
  //   }
});
