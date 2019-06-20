'use strict'

// Modelo
var Project = require('../models/project');
var controller = {

    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy la Home'
        })
    },

    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion Test del controlador de Project'
        })
    },

    saveProject: function(req, res){
      // Instancia del modelo
      var project = new Project();
      var params = req.body;

      project.name = params.name;
      project.description = params.description;
      project.category = params.category;
      project.languages = params.languages;
      project.year = params.year;
      project.image = null;

      // GUARDAR EN BD
      project.save((err, projectStored) => {
        if (err) return res.status(500).send({message: 'Error al guardar el documento.'});
        if (!projectStored) return res.status(404).send({message: ' No se ha podido guardar'});

        return res.status(200).send({project: projectStored});

      });
      //  return res.status(200).send({
      //    project: project,
      //    message: 'Metodo SaveProject'
      //  });
    },

    // OBTENER POR ID
    getProject: function (req, res) {
      var projectId = req.params.id;
      // Comprobar  si es nulo
      if (projectId == null) return res.status(404).send({message: ' El proyecto no existe.'});
      // Buscar por ID
      Project.findById(projectId, (err, project) =>{
        if (err) return res.status(500).send({message: 'Error al devolver los datos.'});
        if (!project) return res.status(404).send({message: ' El proyecto no existe.'});

        return res.status(200).send({project});
      });
    },
    // OBTENER TODOS
    getProjects: function (req, res) {
      // Project.find({year:.2019}).exec((err, project) =>{ Aaca se le puede pasar el parametro del año y lo busca tambien - Consultar en doc de Mongoose
      // Project.find({}).sort('year').exec((err, project) =>{ Aca ordenamos por año desc
      // Project.find({}).sort('-year').exec((err, project) =>{ Aca ordenamos del mas actual al mas viejo
      Project.find({}).exec((err, project) =>{
        if (err) return res.status(500).send({message: 'Error al devolver los datos.'});
        if (!project) return res.status(404).send({message: ' No hay proyectos que mostrar.'});

        return res.status(200).send({project});
      });
    },
     // ACTUALIZAR POR ID
     updateProject: function (req, res) {
      //  Capturamos el valor que llegue por la url
       var projectId = req.params.id;
      //  Todo el objeto con los datos actualizados
       var update = req.body;
      // Pasamos un tercer parametro new:true para que devuelva los datos actuales actualizados
      Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) =>{
        if (err) return res.status(500).send({message: 'Error al actualizar.'});
        if (!projectUpdated) return res.status(404).send({message: ' No existe le proyecto para actualizar.'});

        return res.status(200).send({
          project: projectUpdated
        });
      });
    },
     // BORRAR POR ID
     deleteProject: function (req, res) {
      //  Capturamos el valor que llegue por la url
       var projectId = req.params.id;
      //  Todo el objeto con los datos actualizados
       var update = req.body;
      // Pasamos un tercer parametro new:true para que devuelva los datos actuales borrados
      Project.findByIdAndRemove(projectId, update, {new:true}, (err, projectRemoved) =>{
        if (err) return res.status(500).send({message: 'Error al borrar.'});
        if (!projectRemoved) return res.status(404).send({message: ' No existe le proyecto para Eliminar.'});

        return res.status(200).send({
          project: projectRemoved
        });
      });
    },
    // SUBIR IMAGEN
    uploadImage: function (req, res) {
      //  Capturamos el ID por la url del proyecto donde se guardara la imagen
       var projectId = req.params.id;
      //  Todo el objeto con los datos actualizados
       var fileName = 'Imagen no subida...';
        if (req.files) {
          return res.status(200).send({
            files: req.files
          });
        }else {
          return res.status(200).send({
            message: fileName
          });
        }

    }

};

module.exports = controller;
