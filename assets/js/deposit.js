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
        //  CAPTURAR LA TARJETA SELECCIONADA
        const tarjetaSeleccionada = document.querySelector('input[name="options-base"]:checked');
        let nombreBanco = "Tarjeta de Crédito";

        if (tarjetaSeleccionada) {
            // Buscamos el label correspondiente usando el id del radio seleccionado
            const labelTarjeta = document.querySelector(`label[for="${tarjetaSeleccionada.id}"]`);
            if (labelTarjeta) {
                // solo el texto del banco (limpiando espacios extras)
                nombreBanco = labelTarjeta.textContent.trim();
            }
        }
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
        const nuevaTransaccion = {
            type: "deposit",
            amount: monto,
            from: `Desde cuenta ${nombreBanco}`, // Guardamos la tarjeta de origen aquí
            date: new Date().toLocaleDateString("es-CL") // Guarda formato limpio dd-mm-aaaa
        };
        currentUser.balance += monto;
        currentUser.transactions = [nuevaTransaccion,...currentUser.transactions];

        // actualizar el saldo de curentUser en localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // reemplazar currentUser actualizado en lista users
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.email === currentUser.email);

        // si la busqueda no falla actualizar datos de currentUser en lista de users
        if (userIndex !== -1) {
            users[userIndex].balance = currentUser.balance;
            users[userIndex].transactions = currentUser.transactions;

            localStorage.setItem("users", JSON.stringify(users));
        }

        // mostrar nuevo saldo en formato CLP
        balanceSpan.textContent = formatoMoneda.format(currentUser.balance);

        alert(`Depósito exitoso. Monto depositado: ${monto}. Tu nuevo saldo es: ${formatoMoneda.format(currentUser.balance)}`);
        console.log("Monto depositado:", monto, {nuevaTransaccion}, currentUser);

        // Limpiar el formulario
        depositForm.reset();


    });
})();

// agregar chatbot?  beneficios cine restaurants bencina belleza farmacia




