// Exportar mongoose.
const mongoose = require('mongoose');

// Conexión con el mongooseCompass Instalado. Conectada a la base de datos "Prueba_API".
const dbconnect = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://localhost:27017/Prueba_API');
        console.log('Conectado a MongoDB, :D');
    } catch (err) {
        console.error('Error al conectar a MongoDB, verifique el codigo.', err);
    }
}

module.exports = dbconnect;