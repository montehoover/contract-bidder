var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  
  db.project.findAll({
    include: [db.subproject]
  }).then(function(projects){
    res.render('index', {projects: projects});  
  })
});

module.exports = router;