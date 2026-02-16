# API Productos 🛍️

## Descripción del Proyecto

API REST para la gestión de productos con interfaz web interactiva. Este proyecto permite crear, leer, actualizar y eliminar productos a través de una API RESTful construida con Node.js y Express, complementada con un dashboard web moderno y responsive.

El sistema utiliza un archivo JSON como base de datos para almacenar los productos, lo que facilita su implementación y portabilidad sin necesidad de configurar servicios de base de datos externos.

## Características Principales

- ✅ API REST para gestión de productos
- ✅ Interfaz web moderna
- ✅ Persistencia de datos en JSON
- ✅ Middleware de logging para registro de peticiones
- ✅ Variables de entorno para configuración

## Tecnologías Utilizadas

### Backend

- **Node.js** - Entorno de ejecución de JavaScript
- **Express 5.2.1** - Framework web para Node.js
- **dotenv 17.3.1** - Gestión de variables de entorno
- **ES Modules** - Sistema de módulos moderno de JavaScript

### Frontend

- **HTML5** - Estructura del dashboard
- **CSS3** - Estilos con gradientes y animaciones
- **JavaScript Vanilla** - Lógica del cliente sin frameworks

### Almacenamiento

- **JSON** - Base de datos en archivo plano

## Estructura del Proyecto

```
api-productos/
├── data/
│   └── database.json        # Base de datos de productos
├── public/
│   ├── index.html           # Dashboard web
│   ├── script.js            # Lógica del cliente
│   └── styles.css           # Estilos CSS
├── src/
│   ├── app.js               # Punto de entrada de la aplicación
│   ├── config/
│   │   └── env.js           # Configuración de variables de entorno
│   ├── middlewares/
│   │   └── logger.js        # Middleware de logging
│   └── routes/
│       └── items.js         # Rutas de la API de productos
├── .env                     # Variables de entorno (crear manualmente)
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

## Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)
- Git (opcional, para clonar el repositorio)

### Pasos para Inicializar en Local

1. **Clonar o descargar el proyecto**

   ```bash
   git clone <url-del-repositorio>
   cd api-productos
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```env
   PORT=3000
   APP_NAME=API Productos
   ```

4. **Iniciar el servidor**

   ```bash
   node src/app.js
   ```

5. **Acceder a la aplicación**

   Abre tu navegador y visita:
   - Dashboard web: `http://localhost:3000`
   - API directa: `http://localhost:3000/api/items`

## Endpoints de la API

### GET /api/items

Obtiene todos los productos

**Respuesta:**

```json
{
  "items": [
    {
      "id": 1,
      "name": "Producto 1",
      "description": "Descripción del producto"
    }
  ]
}
```

### POST /api/items

Crea un nuevo producto

**Body:**

```json
{
  "name": "Nuevo Producto",
  "description": "Descripción del nuevo producto"
}
```

## Uso del Dashboard Web

1. Ingresa el nombre y descripción del producto en los campos del formulario
2. Haz clic en "Agregar producto" para crearlo
3. Los productos aparecerán listados debajo del formulario
