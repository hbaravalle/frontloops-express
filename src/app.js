const express = require('express');
const app = express();

const loopsRouter = require('./routes/loops');

// Configuración
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Rutas
app.get('/', function(req, res) {
    res.send("Bienvenide!")
});

app.use('/loops', loopsRouter);

app.listen(3000, function() {
    console.log("Servidor corriendo en el puerto 3000")
});