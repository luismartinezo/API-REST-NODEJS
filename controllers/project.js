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

      // Guardar en base datos
      project.save((err, projectStored) => {
        if (err) return res.status(500).send({message: 'Error al guardar el documento.'});

        if (!projectStored) return res.status(404).send({message: ' No se ha podido guardar'});

        return res.status(200).send({project: projectStored});

      });
      //  return res.status(200).send({
      //    project: project,
      //    message: 'Metodo SaveProject'
      //  });
    }
};

module.exports = controller;
