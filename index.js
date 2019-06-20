// Para activar las caracteristicas de ECMASCRIPT 6
'use strict'

var mongoose = require('mongoose');
// importamos app
var app = require('./app');
// Creamos un puerto del servidor
var port = 3700;

// Conexion a la base de datos
mongoose.Promise = global.Promise;
// Conexion con la url y nombre de base datos
mongoose.connect('mongodb://localhost:27017/Portafolio', { useNewUrlParser: true })
.then(()=>{
    // Muestra este mensaje solo si hubo conexion a db o capturamos el error con un catch
    console.log('Conexion a las base datos establecida con satisfaccion...');

    // Crear servidor: parametros de puerto y funcion de callback-flecha
    app.listen(port, ()=>{

        console.log('Servidor corriendo correctamente en la url: localhost:3700');
    });
})
.catch(err => console.error(err));
