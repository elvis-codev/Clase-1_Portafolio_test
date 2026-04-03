
# Guía de Buenas Prácticas: Portafolio + GitHub para Desarrolladores Fullstack

---

## 1. ¿Qué es realmente tu portafolio?

Tu portafolio no es solo una lista de proyectos.

Es tu **prueba real de que sabes programar**

Mientras un CV dice *“sé Node y Express”*, tu portafolio demuestra:

* cómo estructuras código
* cómo resuelves problemas
* cómo documentas
* cómo trabajas como desarrollador profesional

Tu portafolio vive principalmente en:
GitHub

---

## 2. ¿Por qué es tan importante?

Un reclutador o empresa normalmente:

1. Mira tu GitHub
2. Abre 1 o 2 repos
3. Decide en minutos si sigues o no

En muchos casos:
**Tu portafolio vale más que tu CV**

---

## 3. ¿Qué debe tener un buen portafolio?

Mínimo recomendado: **3 a 5 proyectos**

### Tipos ideales para Fullstack Node:

* API REST (Node + Express)
* CRUD completo (con base de datos)
* Autenticación (JWT)
* Proyecto realista (ej: pedidos cocina, e-commerce simple)

Importante:

* Mejor **pocos proyectos bien hechos** que muchos incompletos

---

## 4. Buenas prácticas en tu perfil de GitHub

### Perfil completo

* Foto profesional (aunque sea simple)
* Bio clara:

  ```
  Fullstack JavaScript Developer | Node.js | Express | JWT | PostGRESQL | Sequelize
  ```
* Ubicación > global remote
* Link a portafolio o proyectos

---

### README de perfil (muy recomendado)

GitHub permite crear un repo especial con tu username.

Incluye:

* Quién eres
* Tecnologías
* Proyectos destacados
* Contacto

---

## 5. Buenas prácticas en repositorios

### Naming (muy importante)

❌ malo:

```
proyecto1
api-final-bueno-ahora-si
test123
```

✅ bueno:

```
restaurant-orders-api
jwt-auth-node-api
ecommerce-backend-express
```

---

### Estructura clara

Ejemplo Node/Express:

```
/src
  /routes
  /controllers
  /models
  /middlewares
app.js
package.json
```

---

### Commits profesionales

❌ malo:

```
cosas
arreglos
final
```

✅ bueno:

```
feat: add order creation endpoint
fix: validate empty request body
refactor: separate routes and controllers
```

---

### Uso de `.gitignore`

Nunca subir:

* node_modules
* .env
* archivos sensibles

---

## 6. README profesional (CLAVE)

Un buen README puede marcar la diferencia.

### Estructura recomendada:

```
# Nombre del proyecto

## Descripción
API para gestión de pedidos en cocina

## Tecnologías
- Node.js
- Express
- MongoDB

## Instalación
npm install

## Ejecución
npm run dev

## Endpoints
GET /orders
POST /orders

## Autor
Roberto Gonzalez
```

---

## 7. Herramientas para tu portafolio

* GitHub → base de todo
* Vercel → deploy rápido
* Netlify → frontends
* Página web personal (opcional pero potente)
* YouTube (demo de proyectos reales)

---

## 8. ¿Cuándo NECESITAS un buen repositorio?

### 1. Buscar trabajo

* Es lo primero que revisan
* Puede definir si te llaman o no

---

### 2. Postular a bootcamps avanzados o prácticas

* Evalúan tu nivel real
* Ven cómo escribes código

---

### 3. Freelance

* Clientes quieren ver proyectos reales
* Tu repo funciona como “prueba de calidad”

---

### 4. Trabajar en equipo

* Buen repo = mejor colaboración
* Código entendible = menos problemas

---

### 5. Crecer como desarrollador

* Te obliga a:

  * ordenar código
  * documentar
  * pensar como profesional

---

## 9. Checklist final para tus alumnos

Antes de decir “este es mi portafolio”:

* [ ] Tengo mínimo 5 proyectos reales
* [ ] Mis repos tienen nombres claros
* [ ] Todos tienen README
* [ ] Se pueden ejecutar sin problemas
* [ ] Mi código está ordenado
* [ ] No hay archivos sensibles

---
