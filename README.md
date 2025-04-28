# API REST de Productos - Arquitectura en 3 Capas

---

## Características que hacen que esta sea una API REST:

- **Rutas RESTful:**  
  - `GET /productos` → Listar productos
  - `POST /productos` → Agregar producto
  - `GET /productos/:id` → Buscar producto por ID
  - `PUT /productos/:id` → Actualizar producto
  - `DELETE /productos/:id` → Eliminar producto

- **Intercambio de datos en formato JSON.**

- **Operaciones basadas en recursos** (los "productos").

---

## Diferencias respecto a la versión anterior (Web con vistas):

| Característica                   | Versión Web (Vistas)                      | Versión API REST                        |
|------------------------------------|-------------------------------------------|-----------------------------------------|
| Interfaz                          | HTML (EJS) renderizado en servidor         | JSON puro, sin vistas                   |
| Comunicación cliente-servidor     | HTML generado por el servidor             | API que responde solo datos JSON        |
| Uso principal                     | Navegador muestra páginas                 | Clientes HTTP consumen datos (apps móviles, frontend SPA) |
| Rutas                              | Mapeadas a vistas                         | Mapeadas a operaciones sobre recursos   |
| Flexibilidad                      | Limitada al navegador                     | Usable por cualquier cliente HTTP       |

---

## Para correr la API:

```bash
npm install
node app.js
