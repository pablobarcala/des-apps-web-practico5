let productos = [];
let idCounter = 1;

function insertarProducto(producto) {
    producto.id = idCounter++;
    productos.push(producto);
    return producto;
}

function obtenerTodos() {
    return productos;
}

function obtenerPorId(id) {
    return productos.find(p => p.id === parseInt(id));
}

function actualizar(id, nombre, precio) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) {
        producto.nombre = nombre || producto.nombre;
        producto.precio = precio || producto.precio;
        return producto;
    }
    return null;
}

function eliminar(id) {
    const index = productos.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        productos.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { insertarProducto, obtenerTodos, obtenerPorId, actualizar, eliminar };
