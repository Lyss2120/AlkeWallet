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

// el usuario tendra un historial de transacciones base para ver el funcionamiento de la app. las nuevas transacciones se agregaran al historial
  if (!currentUser.transactions || currentUser.transactions.length === 0) {
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
  }

  currentUser?.transactions?.forEach((transaction) => {
  // 1. Validamos si es un ingreso o un egreso para definir el color y el signo dinámicamente
  const income = transaction.amount > 0;
  const transactionColor = income ? 'text-success' : 'text-danger';
  const sign = income ? '+' : '-';
  
  // 2. Obtenemos el valor absoluto del monto para que el signo no se duplique matemáticamente
  const amount = Math.abs(transaction.amount).toLocaleString("es-CL");

  // 3. Inyectamos la estructura adaptada a tu diseño Premium Glass con Flexbox ordenado
  transactionList.innerHTML += `                     
    <li class="list-group-item bg-dark bg-opacity-25 text-light border-light border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center p-3 mb-2 rounded-3 shadow-sm"> 
      
      <!-- Lado Izquierdo: Tipo de movimiento y detalles de origen/destino -->
      <div class="mb-2 mb-sm-0">
        <div class="h5 fw-semibold text-capitalize mb-1">${transaction.type}</div> 
        <div class="small opacity-75">
          <span class="fw-medium text-success">${transaction.from}</span>
        </div>
      </div>
      
      <!-- Lado Derecho: Monto dinámico y fecha de la transacción -->
      <div class="text-start text-sm-end">
        <div class="${transactionColor} h5 fw-bold mb-1">
          ${sign}$${amount}
        </div>
        <div class="small opacity-50 transaction-date">
          ${transaction.date}
        </div>
      </div>

    </li> 
  `;
});

  
  
  
  
  
    // transaction.amount > 0 && transaction.amount + "+" 
    // transactionList.innerHTML += `                     
    //         <li class="list-group-item bg-dark bg-opacity-50 text-light border-secondary border-opacity-20 d-flex justify-content-between align-items-center"> 
    //         <div class="d-flex justify-content-between h5">
    //           <div>${transaction.type}</div> 
    //           <span class="text-danger fw-bold">-${transaction.amount.toLocaleString("es-CL")}</span>
    //            </div>
    //                <div class="d-flex justify-content-between opacity-75 h6 ">
    //             <span class="transaction-from">${transaction.from} </span>
    //             <br>
    //             <span class="transaction-date">${transaction.date}</span>
    //           </div>
    //         </li> 
          
    //       `

    
  });



 





