# API Productos 🛍️

## Descripción del Proyecto

API REST para la gestión de productos con interfaz web interactiva. Este proyecto permite crear, leer, actualizar y eliminar productos a través de una API RESTful construida con Node.js y Express, complementada con un dashboard web moderno y responsive.

El sistema utiliza un archivo JSON como base de datos para almacenar los productos, lo que facilita su implementación y portabilidad sin necesidad de configurar servicios de base de datos externos.

## Características Principales

- ✅ API REST completa para gestión de productos (CRUD)
- ✅ Interfaz web moderna y responsive
- ✅ Crear, editar y eliminar productos desde el dashboard
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
  "description": "Descripción del nuevo producto",
  "price": 99.99
}
```

**Respuesta exitosa (201):**

```json
{
  "id": 2,
  "name": "Nuevo Producto",
  "description": "Descripción del nuevo producto",
  "price": 99.99
}
```

### PUT /api/items/:id

Actualiza un producto existente

**Parámetros:**

- `id` - ID del producto a actualizar

**Body:**

```json
{
  "name": "Producto Actualizado",
  "description": "Nueva descripción del producto",
  "price": 149.99
}
```

**Respuesta exitosa (200):**

```json
{
  "id": 1,
  "name": "Producto Actualizado",
  "description": "Nueva descripción del producto",
  "price": 149.99
}
```

### DELETE /api/items/:id

Elimina un producto por su ID

**Parámetros:**

- `id` - ID del producto a eliminar

**Respuesta exitosa (200):**

```json
{
  "message": "Item deleted",
  "id": 1
}
```

## Uso del Dashboard Web

El dashboard proporciona una interfaz completa para gestionar tus productos:

### Agregar un Producto

1. Completa los campos del formulario:
   - **Nombre del producto**: Nombre descriptivo
   - **Descripción del producto**: Detalles del producto
   - **Precio del producto**: Valor numérico (ej: 99.99)
2. Haz clic en **"Agregar producto"**
3. El producto aparecerá en la lista debajo del formulario

### Editar un Producto

1. En la lista de productos, haz clic en el botón **"Editar"** del producto que deseas modificar
2. El formulario se llenará automáticamente con los datos del producto
3. El botón cambiará a **"Actualizar producto"** y aparecerá un botón **"Cancelar"**
4. Modifica los campos que necesites
5. Haz clic en **"Actualizar producto"** para guardar los cambios
6. O haz clic en **"Cancelar"** para descartar los cambios

### Eliminar un Producto

1. En la lista de productos, haz clic en el botón **"Eliminar"** del producto que deseas borrar
2. Aparecerá una confirmación preguntando si estás seguro
3. Confirma la acción para eliminar el producto permanentemente
