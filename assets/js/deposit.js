(() => {
    const depositForm = document.getElementById("form-deposito");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const balanceSpan = document.getElementById("balance");
    // funcion para mostrar el monto con formato de moneda local tmb se puede balnac.toLocaleString("es-CL") 
    const formatoMoneda = new Intl.NumberFormat('es-Cl', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }
    )

    if (!depositForm) return;

    currentUser.balance ? balanceSpan.textContent = formatoMoneda.format(currentUser.balance) : balanceSpan.textContent = formatoMoneda.format(0);


    depositForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // validar monto ingresado y transformar a integer
        const monto = parseInt(depositForm.monto.value);

        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa un monto válido mayor a 0.");
            return;
        }

        // crear la variable balance si no existe, y sumar el depósito
        if (typeof currentUser.balance !== 'number') {
            currentUser.balance = 0;
        }
        currentUser.balance += monto;

        // actualizar el saldo de curentUser en localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // reemplazar currentUser actualizado en lista users
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.email === currentUser.email);

        // si la busqueda no falla actualizar datos de currentUser en lista de users
        if (userIndex !== -1) {
            users[userIndex].balance = currentUser.balance;
            localStorage.setItem("users", JSON.stringify(users));
        }

        // mostrar nuevo saldo en formato CLP
        balanceSpan.textContent = formatoMoneda.format(currentUser.balance);

        alert(`Depósito exitoso. Monto depositado: ${monto}. Tu nuevo saldo es: ${formatoMoneda.format(currentUser.balance)}`);
        console.log("Monto depositado:", monto);

        // Limpiar el formulario
        depositForm.reset();


    });
})();

// agregar chatbot?  beneficios cine restaurants bencina belleza farmacia




