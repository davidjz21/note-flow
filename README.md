 NoteFlow - Descripción del Proyecto

## Visión General
NoteFlow es una aplicación web full-stack para crear, editar y gestionar notas personales. La aplicación permite a los usuarios crear notas con título y descripción, ver todas sus notas en una lista, editar notas existentes y eliminarlas con confirmación.

## Tecnologías Clave

- **React 19** - Interfaz de usuario
- **Node.js + Express** - API backend
- **MongoDB + Mongoose** - Base de datos
- **Tailwind CSS + DaisyUI** - Estilización utility-first
- **React Router** - Navegación entre vistas
- **Axios** - Cliente HTTP
- **React Toastify** - Notificaciones toast
- **date-fns** - Formateo de fechas en español

## Arquitectura

### Frontend
- **Framework**: React 19 con React Router DOM
- **Estilización**: Tailwind CSS v3 con DaisyUI
- **Comunicación API**: Axios
- **Notificaciones**: React Toastify
- **Iconos**: Lucide React
- **Manejo de fechas**: date-fns con localización en español
- **Ruteo**: react-router-dom con las siguientes rutas:
  - `/` - HomePage: Lista de todas las notas
  - `/createNote` - CreateNotePage: Formulario para crear nueva nota
  - `/editNote/:id` - EditNotePage: Formulario para editar una nota existente

### Backend
- **Entorno**: Node.js con Express
- **Base de datos**: MongoDB (usando Mongoose)
- **API REST**: Endpoints bajo `/api/notes`
- **Puerto**: 3000 (configurable en .env)

## Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/notes` | Obtener todas las notas |
| `GET` | `/api/notes/:id` | Obtener una nota por ID |
| `POST` | `/api/notes` | Crear una nueva nota |
| `PUT` | `/api/notes/:id` | Actualizar una nota existente |
| `DELETE` | `/api/notes/:id` | Eliminar una nota |


## Estructura de Datos (Modelo MongoDB)

```javascript
{
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: Date, // generado automáticamente por timestamps
  updatedAt: Date  // generado automáticamente por timestamps
}
```

## Despliegue

La aplicación está desplegada en: https://note-flow-web.netlify.app/

El backend se conecta a MongoDB Atlas (nube).
