var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  db.project.findAll({
    include: [db.subproject]
  }).then(function(projects){
    res.render('index', {projects: projects});  
  });
});

router.get('/projects', function(req, res) {
  db.project.findAll({
    include: [db.subproject]
  }).then(function(projects){
    res.render('projects', {projects: projects});  
  })
});

router.get('/projects/new', function(req, res) {
  // Could just do this in a modal
  res.render('new-project');
});

router.post('/projects/new', function(req, res) {
  db.project.create({
    name: req.body.name,
    description: req.body.description
  }).then(function(project) {
    categories = req.body.categories;
    descriptions = req.body.descriptions;
    for (var i = 0; i <categories.length; i++) {
      project.createSubproject({
        category: categories[i],
        description: descriptions[i]
      });
    }
    res.redirect('/projects');
  });
});

router.get('/projects/:subprojectid', function(req, res) {
  db.subproject.findOne({
    where: {
      id: req.params.subprojectid
    },
    include: [db.project]
  }).then(function(subproject) {
    res.render('showproject', {subproject: subproject});
  });
});


router.get('/projects/:subprojectid/bid', function(req, res) {
    db.subproject.findOne({
    where: {
      id: req.params.subprojectid
    }
  }).then(function(subproject) {
    res.render('bid', {subproject: subproject});
  });
});

router.get('/auth/signup', function(req, res) {
  // cound be a modal or something lighter
  res.render('signup2');
});

router.post('/auth/signup', function(req, res) {
  // db.subcontractor.create({
  //   companyName: req.body.company-name
  //   firstName:
  //   lastName:
  // }).then(function(subcontractor) {
  //   // Take new user to page with welcome message and search functionality
  //   res.render('welcome-page');
  // });
  res.redirect('/');
});



module.exports = router;