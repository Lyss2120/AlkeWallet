// IIFE

(() => {
    const formModalContacto = document.getElementById("form-modal-contacto");
    const listaContactos = document.getElementById("lista-contactos");
    const inputRecipient = document.getElementById("recipient");
    const formTransferir = document.getElementById("form-transferir");
    const inputMonto = document.getElementById("monto-transferir");
    const balanceSpan = document.getElementById("balance");

    if (!formTransferir) return;

    // Obtener sesión del usuario actual
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
    if (!currentUser) return;

    // Inicializar contactos por defecto si la lista está vacía console.log( typeof(currentUser.contactos[0].rut) )

    if (!Array.isArray(currentUser.contactos) || currentUser.contactos.length === 0 || typeof currentUser.contactos === 'string') {
        currentUser.contactos = [
            { nombre: "John Doe", rut: "11.111.111-1", banco: "Banco ABC", tipo: "Corriente", cuenta: "123456" },
            { nombre: "Jane Smith", rut: "22.222.222-2", banco: "Banco XYZ", tipo: "Vista", cuenta: "987654" }
        ];

        
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    const saldoActual = currentUser.balance ? currentUser.balance : '0';
    console.log(saldoActual.toLocaleString("es-CL"))
    // mostrar saldo cuenta balnac.toLocaleString("es-CL") 
    balanceSpan.textContent = saldoActual.toLocaleString("es-CL")


    // --- FUNCIÓN PARA RENDERIZAR CONTACTOS (Acepta una lista filtrada) ---
    const renderContactos = (contactosAEditar = currentUser.contactos) => {
        if (!listaContactos) return;
        listaContactos.innerHTML = "";

        if (contactosAEditar.length === 0) {
            listaContactos.innerHTML = `<li class="list-group-item text-muted text-center">No se encontraron contactos</li>`;
            return;
        }

        contactosAEditar.forEach(contacto => {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
            li.style.cursor = "pointer";

            li.innerHTML = `
                <div>
                    <strong>${contacto.nombre}</strong> <small class="text-muted">(${contacto.rut})</small>
                    <br>
                    <small class="text-secondary">${contacto.banco} — ${contacto.tipo} N° ${contacto.cuenta}</small>
                </div>
            `;

            // Al hacer clic, se selecciona el contacto y limpiamos el filtro visual volviendo a mostrar todos
            li.addEventListener("click", () => {
                inputRecipient.value = `${contacto.nombre} (${contacto.rut})`;
                renderContactos(currentUser.contactos);
            });

            listaContactos.appendChild(li);
        });
    };

    // Render inicial
    renderContactos();

    // --- BUSCADOR EN TIEMPO REAL ---
    inputRecipient.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        // Si el buscador está vacío, muestra todos los contactos
        if (query === "") {
            renderContactos(currentUser.contactos);
            return;
        }

        // Filtrar por nombre o por RUT
        const contactosFiltrados = currentUser.contactos.filter(contacto => {
            const nombreCoincide = contacto.nombre.toLowerCase().includes(query);
            const rutCoincide = contacto.rut.toLowerCase().includes(query);
            return nombreCoincide || rutCoincide;
        });

        // Renderizar solo los que coinciden
        renderContactos(contactosFiltrados);
    });

    // --- ACCIÓN: GUARDAR CONTACTO DESDE EL MODAL ---
    formModalContacto.addEventListener("submit", (e) => {
        e.preventDefault();

        const nuevoContacto = {
            nombre: document.getElementById("reg-nombre").value.trim(),
            rut: document.getElementById("reg-rut").value.trim(),
            banco: document.getElementById("reg-banco").value,
            tipo: document.getElementById("reg-tipo").value,
            cuenta: document.getElementById("reg-cuenta").value.trim()
        };

        currentUser.contactos.push(nuevoContacto);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].contactos = currentUser.contactos;
            localStorage.setItem("users", JSON.stringify(users));
        }

        formModalContacto.reset();
        inputRecipient.value = ""; // Limpiar buscador por si acaso
        renderContactos();

        const modalElement = document.getElementById('modalNuevoContacto');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();

        alert("Contacto agregado con éxito.");
    });

    // --- ACCIÓN: PROCESAR TRANSFERENCIA ---
    formTransferir.addEventListener("submit", (e) => {
        e.preventDefault();

        const destinatario = inputRecipient.value.trim();
        const monto = parseInt(inputMonto.value, 10);

        if (!destinatario) {
            alert("Por favor, selecciona un destinatario.");
            return;
        }

        if (isNaN(monto) || monto <= 0) {
            alert("Ingresa un monto válido mayor a 0.");
            return;
        }

        if (currentUser.balance < monto) {
            alert("Saldo insuficiente para realizar esta transferencia.");
            return;
        }

        currentUser.balance -= monto;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].balance = currentUser.balance;
            localStorage.setItem("users", JSON.stringify(users));
        }

        alert(`¡Transferencia exitosa de $${monto} a ${destinatario}!`);
        location.href = "menu.html";
    });
})();

// probar y modificar para dar formato al rut
// formatRut: (rut) => {
//     // XX.XXX.XXX-X
//     const newRut = rut.splice(-1, 0, '-');
//     const lastDigit = newRut.substr(-1, 1);
//     const rutDigit = newRut.substr(0, newRut.length - 1)
//     let format = '';
//     for (let i = rutDigit.length; i > 0; i--) {
//         const e = rutDigit.charAt(i - 1);
//         format = e.concat(format);
//         if (i % 3 === 0) {
//             format = '.'.concat(format);
//         }
//     }
//     return format.concat('-').concat(lastDigit);
// }
// console.log(currentUser);
