<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🎓 Mentorship API - Academic Mentorías

API REST para la gestión de mentorías académicas, desarrollada con **NestJS**, **Prisma ORM** y **PostgreSQL**.

---

## 📋 Stack Tecnológico

- **Framework:** NestJS 11
- **ORM:** Prisma 7 con PostgreSQL
- **Documentación:** Swagger (OpenAPI)
- **Validación:** class-validator + class-transformer
- **Entorno:** Node.js 22+

---

## 🚀 Ejecución Local

### 1. Clonar repositorio

```bash
git clone https://github.com/WinterMinaya/mentorship-api-WM.git
cd mentorship-api-WM
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/mentorship_db?schema=academic
PORT=3000
NODE_ENV=development
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Generar el cliente de Prisma

```bash
npx prisma generate
```

### 5. Ejecutar migraciones

```bash
npx prisma migrate dev
```

### 6. Iniciar servidor

```bash
# Modo desarrollo (con watch)
npm run start:dev

# Modo producción
npm run start:prod
```

### 7. Acceder a la documentación

Una vez iniciado, abre: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🌐 Deploy en Render.com

Sigue estos pasos para desplegar la API en la nube con Render:

### Requisito previo

Tener una base de datos PostgreSQL en la nube. Recomendaciones gratuitas:
- **Render PostgreSQL** (incluido en tu cuenta Render)
- **Neon.tech** (gratuito, 500MB)
- **Aiven** (gratuito)

### Paso 1: Crear cuenta en Render

1. Ve a [https://render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub

### Paso 2: Desplegar desde GitHub

1. Haz clic en **"New +"** → **"Web Service"**
2. Conecta tu repositorio de GitHub: `WinterMinaya/mentorship-api-WM`
3. Configura el servicio:

| Campo | Valor |
|-------|-------|
| **Name** | `mentorship-api-wm` |
| **Region** | `Oregon (US West)` o la más cercana |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npx prisma generate && npm run build` |
| **Start Command** | `npm run start:prod` |
| **Plan** | `Free` |

### Paso 3: Configurar variables de entorno

En la sección **"Environment Variables"**, agrega:

| Variable | Valor |
|----------|-------|
| `DATABASE_URL` | `postgresql://usuario:password@host:5432/dbname?schema=academic` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |

### Paso 4: Crear el servicio

Haz clic en **"Create Web Service"**. Render automáticamente:
1. Clonará el repositorio
2. Ejecutará el build command
3. Iniciará la aplicación
4. Te asignará una URL tipo: `https://mentorship-api-wm.onrender.com`

### Paso 5: Verificar

Una vez desplegado, accede a:

```
https://mentorship-api-wm.onrender.com/api-docs
```

✅ **¡Tu API estará funcionando en la nube!**

---

## 📚 Endpoints de la API

### Users (Usuarios: Mentores y Estudiantes)
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/users` | Listar usuarios activos |
| `GET` | `/users/{id}` | Obtener usuario por ID |
| `POST` | `/users` | Crear usuario |
| `PATCH` | `/users/{id}` | Actualizar usuario |
| `DELETE` | `/users/{id}` | Eliminación lógica de usuario |

### Categories (Categorías de materias)
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/categories` | Listar categorías activas |
| `GET` | `/categories/{id}` | Obtener categoría por ID |
| `POST` | `/categories` | Crear categoría |
| `PATCH` | `/categories/{id}` | Actualizar categoría |
| `DELETE` | `/categories/{id}` | Eliminación lógica de categoría |

### Mentorships (Mentorías)
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/mentorships` | Listar mentorías activas |
| `GET` | `/mentorships/{id}` | Obtener mentoría por ID |
| `POST` | `/mentorships` | Crear mentoría |
| `PATCH` | `/mentorships/{id}` | Actualizar mentoría |
| `DELETE` | `/mentorships/{id}` | Eliminación lógica de mentoría |

---

## 🗄️ Esquema de Base de Datos

El proyecto usa **PostgreSQL** con esquema `academic` y las siguientes tablas:

- **users** - Estudiantes y mentores (con rol STUDENT o MENTOR)
- **categories** - Categorías/áreas de conocimiento
- **mentorships** - Relación de mentoría entre usuario-estudiante y usuario-mentor

---

## 📄 Licencia

[MIT](https://github.com/nestjs/nest/blob/master/LICENSE)

