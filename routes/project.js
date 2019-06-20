'use strict'

var express = require('express');
// Cargamos el controlador
var ProjectController = require('../controllers/project');

var router = express.Router();

// Middleeare: Es algo que se ejecuta antes de que se ejecute el metodo o accion del controlador
var multipart = require('connect-multiparty');
var multipartMiddleeare = multipart({uploadDir:'./uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.post('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleeare, ProjectController.uploadImage);
module.exports = router;
