const productoData = require('../data/productoData');

function agregarProducto(nombre, precio) {
    const producto = { nombre, precio };
    return productoData.insertarProducto(producto);
}

function obtenerProductos() {
    return productoData.obtenerTodos();
}

function obtenerProductoPorId(id) {
    return productoData.obtenerPorId(id);
}

function actualizarProducto(id, nombre, precio) {
    return productoData.actualizar(id, nombre, precio);
}

function eliminarProducto(id) {
    return productoData.eliminar(id);
}

module.exports = { agregarProducto, obtenerProductos, obtenerProductoPorId, actualizarProducto, eliminarProducto };