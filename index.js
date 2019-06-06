// Para activar las caracteristicas de ECMASCRIPT 6
'use strict'

var mongoose = require('mongoose');

// Conexion a la base de datos
mongoose.Promise = global.Promise;
// Conexion con la url y nombre de base datos
mongoose.connect('mongodb://localhost:27017/portafolio')
.then(()=>{
    // Muestra este mensaje solo si hubo conexion a db o capturamos el error con un catch
    console.log('Conexion a las base datos establecida con satisfaccion...');
})
.catch(err => console.error(err));
