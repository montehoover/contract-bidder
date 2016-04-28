var db = require("./models");

//////////////////////////////
// ERASING SEEDERS////////////
//////////////////////////////

db.project.findAll({}).then(function(projects) {
  projects.forEach(function(project) {
    project.destroy().then(function(data) {
      console.log("Project deleted:", data);
    });
  });
});

db.subproject.findAll({}).then(function(subprojects) {
  subprojects.forEach(function(subproject) {
    subproject.destroy().then(function(data) {
      console.log("Subproject deleted:", data);
    });
  });
});

db.subcontractor.findAll({}).then(function(subcontractors) {
  subcontractors.forEach(function(subcontractor) {
    subcontractor.destroy().then(function(data) {
      console.log("Subcontractor deleted:", data);
    });
  });
});

db.bid.findAll({}).then(function(bids) {
  bids.forEach(function(bid) {
    bid.destroy().then(function(data) {
      console.log("Bid deleted:", data);
    });
  });
});