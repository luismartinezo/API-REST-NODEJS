'use strict'

// Llamado de las librerias
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de Rutas
var project_routes = require('./routes/project');
// Middlewares: Una capa o un metodo que se ejecuta antes de ejecutar la accion de un controlador
app.use(bodyParser.urlencoded({extended:false}));
// todo lo que le llegue lo convierte a json, cualquier tipo de peticion
app.use(bodyParser.json());

// CORS


// Rutas
app.use('/api', project_routes);
    // app.get('/', (req, res) => {
    //     res.status(200).send(
    //     "<h1>PAGINA DE INICIO</h1>"
    //     );
    // });

// app.get('/test', (req, res) => {
//     res.status(200).send({
//         message: "Hola desde la Api NodeJs"
//     });
// })
    // app.post('/test/:id', (req, res) => {
    //     // console.log(req.param('nombre')); Forma deprecada
    //     // el params solo es cuando se envian parametros por url, en este caso seria body para recibir desde el x-www-form-urlencoded
    //     console.log(req.body.nombre);
    //     console.log(req.query.web); // En caso de tener un parametro por url llamado web=luismartinez.info
    //     console.log(req.params.id); // paramtro por url llamado id
    //     res.status(200).send({
    //         message: "Hola desde la Api NodeJs"
    //     });
    // });
// Exportar la variable que es la que tiene los middleware
module.exports = app;