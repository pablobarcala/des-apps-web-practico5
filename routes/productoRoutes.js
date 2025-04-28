const express = require('express');
const router = express.Router();
const productoService = require('../services/productoService');

// GET /productos → listar productos
router.get('/', (req, res) => {
    const productos = productoService.obtenerProductos();
    res.json(productos);
});

// POST /productos → agregar producto
router.post('/', (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son requeridos" });
    }
    const nuevoProducto = productoService.agregarProducto(nombre, precio);
    res.status(201).json(nuevoProducto);
});

// (Opcional) GET /productos/:id → obtener producto por ID
router.get('/:id', (req, res) => {
    const producto = productoService.obtenerProductoPorId(req.params.id);
    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
});

// (Opcional) PUT /productos/:id → actualizar producto
router.put('/:id', (req, res) => {
    const { nombre, precio } = req.body;
    const actualizado = productoService.actualizarProducto(req.params.id, nombre, precio);
    if (!actualizado) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(actualizado);
});

// (Opcional) DELETE /productos/:id → eliminar producto
router.delete('/:id', (req, res) => {
    const eliminado = productoService.eliminarProducto(req.params.id);
    if (!eliminado) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ mensaje: "Producto eliminado" });
});

module.exports = router;