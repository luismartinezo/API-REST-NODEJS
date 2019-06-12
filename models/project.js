'use strict'


// Importamos mongoose para trabajar con los modelos
var mongoose = require('mongoose');

// Definir el esquema de un modelo
var Schema = mongoose.Schema;

// Objeto molde que utilizamos para crear nuestros projectos
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    languages: String,
    image: String
});
module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documents en la coleccion
