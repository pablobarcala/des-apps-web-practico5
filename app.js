const express = require('express');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(express.json()); // Ahora parseamos JSON

app.use('/productos', productoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});