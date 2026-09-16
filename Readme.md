# 💰 Finanzas en Movimiento - AlkeWallet

¡Bienvenido a **Alkewallet**! Una aplicación web de billetera digital moderna, intuitiva y completamente responsiva. Permite a los usuarios gestionar sus finanzas personales, realizar depósitos de manera interactiva desde diferentes cuentas bancarias, transferir saldo a sus contactos y revisar un historial dinámico con balances actualizados en tiempo real mediante el uso de almacenamiento local (`localStorage`).

Este proyecto destaca por una interfaz oscura premium con una arquitectura de diseño basada en **Glassmorphism (efectos de cristal translúcido)** implementada con **Bootstrap 5** y estilos CSS avanzados.

---

## 🚀 Características Principales

### 🌟 Interfaz de Usuario (Look Glassmorphism)
- **Efecto de Cristal:** Uso de fondos translúcidos difuminados (`backdrop-filter: blur`) con bordes tenues para lograr una estética moderna.
- **Micro-interacciones Fluidas:** Tarjetas interactivas con estados de selección dinámicos y animaciones de elevación (`hover transitions`).
- **Diseño Responsivo Completo:** Adaptación perfecta desde pantallas de smartphones hasta monitores de escritorio gracias al sistema de rejilla nativo de Bootstrap.

### 💳 Funcionalidades del Sistema
- **Página de Inicio Estilizada:** Hero section moderna con texto alineado asimétricamente y secciones de beneficios ordenadas visualmente.
- **Autenticación Simulada (Login / SignUp):** Formularios limpios con validación nativa que conectan los datos del usuario con el almacenamiento local.
- **Panel de Control (Menú Principal):** Rejilla organizada de opciones que permite navegar de manera eficiente por todo el ecosistema financiero.
- **Módulo de Depósitos Inteligente:** Interfaz para cargar saldo seleccionando tarjetas de bancos locales (ITAU, Falabella, Chile, Estado) con iluminación de selección interactiva.
- **Módulo de Transferencias:** Buscador y gestor dinámico de contactos con ventanas modales para añadir nuevos destinatarios (RUT, tipo de cuenta, banco).
- **Historial de Transacciones Acumulativo:** Sistema automatizado que renderiza de forma condicional los ingresos (verde `+`) y egresos (rojo `-`) utilizando formatos de moneda local (`es-CL`). Incluye datos base simulados para cuentas nuevas.


### 📊 Datos de Prueba Precargados (Mock Data)
- **Historial Inicial Automatizado:** El proyecto viene configurado con un set de **6 transacciones y 2 contactos base ya cargados** 
- **Flujo Acumulativo:** Las nuevas operaciones realizadas desde el módulo de depósitos o transferencias no borran el historial base, sino que se integran y se suman de manera dinámica en la parte superior de la lista del usuario.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructuración semántica de interfaces de usuario.
- **CSS3:** Estilos personalizados, gradientes lineales, variables y micro-animaciones.
- **Bootstrap 5:** Framework de diseño para maquetación ágil, componentes modales, utilidades de espaciado y tipografía responsiva.
- **Bootstrap Icons:** Librería de íconos vectoriales para enriquecer la semántica visual del menú y los formularios.
- **JavaScript (ES6+):** Programación modular auto-ejutable (IIFE), manipulación dinámica del DOM, captura de eventos y gestión de persistencia de datos.

---

## 📁 Estructura del Proyecto

```text
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos personalizados (Efecto cristal, hovers, etc.)
│   ├── img/
│   │   ├── icons/               # Iconografía de tarjetas y escudos de confianza
│   │   └── pexels-spoton-....jpg # Imagen de fondo de la sección Hero
│   └── js/
│       ├── deposit.js           # Lógica para captura de tarjetas y depósitos
│       ├── nav.js               # Control y saludos dinámicos en barras de navegación
│       └── transactions.js      # Lógica del historial dinámico y mock-data
├── pages/
│   ├── deposit.html             # Interfaz de carga de fondos
│   ├── login.html               # Formulario de inicio de sesión
│   ├── menu.html                # Panel de control principal
│   ├── sendMoney.html           # Interfaz para enviar dinero a contactos
│   ├── signUp.html              # Formulario de registro de nuevas cuentas
│   └── transactions.html        # Historial de movimientos
└── index.html                   # Página de aterrizaje principal (Landing Page)
```

---

## 💻 Instalación y Uso Local

Para ejecutar e interactuar con el proyecto en tu entorno de desarrollo, sigue estos pasos:

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com
   ```
2. **Abrir el proyecto:**
   Navega a la carpeta raíz del proyecto y abre el archivo `index.html` en tu navegador web preferido.
3. **Uso recomendado (Live Server):**
   Si utilizas *Visual Studio Code*, se recomienda instalar la extensión **Live Server** para levantar un servidor local y visualizar los cambios en tiempo real con rutas relativas perfectas.

> 💡 **Nota de Desarrollo:** Para probar la inicialización de las transacciones base y los flujos limpios desde cero, puedes abrir las Herramientas de Desarrollador del navegador (F12) -> pestaña **Application** -> **Local Storage** y limpiar los datos almacenados, o bien iniciar la navegación utilizando una ventana en **Modo Incógnito**.

---

## 📈 Próximas Mejoras (Roadmap)

- **Chatbot Integrado de Beneficios:** Un asistente interactivo en el Menú Principal que guíe al usuario en la búsqueda de convenios en comercios (Cine, restaurantes, bencina, belleza y farmacias).
- **Habilitación de Módulos Inactivos:** Programación de la pasarela de recargas de telefonía y pago de cuentas de servicios públicos vigentes.
- **Pasarela de Cobro QR:** Generación de códigos QR dinámicos para transferencias inmediatas entre usuarios de la misma plataforma.

---


Desarrollado con ❤️ en 2026. Gestiona tus finanzas en movimiento, a tu manera.
