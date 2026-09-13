document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const transactionList = document.getElementById(
    "transactions-ul",
  );
  const balanceSpan = document.getElementById("balance");

  const saldoActual = currentUser.balance;
  console.log(saldoActual.toLocaleString("es-CL"), 'saldo actual');

  // mostrar saldo cuenta balnac.toLocaleString("es-CL")
  balanceSpan.textContent += `$ ${saldoActual.toLocaleString("es-CL")}`;
  console.log(currentUser)




// revisar  mostrar las transacciones añadiendo un li por cada una
   currentUser.transactions = [
    { type: "Compra en linea", 
      amount: -50000, 
      from: "Walmart", 
      date: "15-Agosto" },
    { type: "Transferencia recibida", 
      amount: 30000, 
      from: "Carlos Muñoz", 
      date: "14-Agosto" },
    { type: "Pago de servicios", 
      amount: -25500, 
      from: "Enel Luz", 
      date: "12-Agosto" },
    { type: "Giro cajero", 
      amount: -20000, 
      from: "Cajero Automático", 
      date: "10-Agosto" },
    { type: "Transferencia recibida", 
      amount: 850000, 
      from: "Empresa SPA", 
      date: "05-Agosto" },
    { type: "Compra presencial", 
      amount: -12490, 
      from: "Farmacias Ahumada", 
      date: "03-Agosto" },
    { type: "Transferencia enviada", 
      amount: -15000, 
      from: "María José Olivares", 
      date: "01-Agosto" },
    { type: "Suscripción", 
      amount: -8490, 
      from: "Netflix", 
      date: "28-Julio" },
    { type: "Compra en linea", 
      amount: -35000, 
      from: "AliExpress", 
      date: "25-Julio" },
    { type: "Devolución de fondos", 
      amount: 120000, 
      from: "Tesorería Gral.", 
      date: "20-Julio" }
]


  currentUser?.transactions?.forEach((transaction) => {
   
    transactionList.innerHTML += `            
          <li class="list-group-item list-group-item-action list row g-1">
              <div class="d-flex justify-content-between h5">
                <span class="transaction-type">${transaction.type}</span>
                <span class="transaction-amount ${transaction.amount > 0 && "text-success"} ">${ transaction.amount > 0 ? '+': '' }${transaction.amount.toLocaleString("es-CL") }</span>
              </div>
             
              <div class="d-flex justify-content-between opacity-75 h6 ">
                <span class="transaction-from">${transaction.from}</span>
                <span class="transaction-date">${transaction.date}</span>
              </div>
          </li> `
    
  });



  // revisar






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
