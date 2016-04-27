var db = require("./models");

//////////////////////////////
// ERASING SEEDERS////////////
//////////////////////////////

// db.project.findAll({}).then(function(projects) {
//   projects.forEach(function(project) {
//     project.destroy().then(function(data) {
//       console.log("Project deleted:", data);
//     });
//   });
// });

// db.subproject.findAll({}).then(function(subprojects) {
//   subprojects.forEach(function(subproject) {
//     subproject.destroy().then(function(data) {
//       console.log("Subproject deleted:", data);
//     });
//   });
// });

///////////////////////////////
// CREATING PROJECTS //////////
///////////////////////////////
// db.project.create({
//   name: 'Metairie Veterans Administration Center',
//   description: 'The Metairie VA Center is a multi-building complex supporting the administrative needs on the Southeast Region of the Department of Veterans Affairs.  The project consists of one three-story building, two auxiliary one-story buildings, parking and associated grounds works.',
// }).then(function(project) {
//   console.log(project)
// });

// db.project.create({
//   name: 'Kenner Municipal Center',
//   description: 'The Kenner Municipal Center is an administrative complex supporting the Kenner Department of Public Works.  The project consists of one six-story building, one auxiliary two-story buildings, underground parking and associated grounds works.',
// }).then(function(project) {
//   console.log(project)
// });

///////////////////////////////
// CREATING SUBPROJECTS ///////
///////////////////////////////
// db.project.findOne({
//   where: {
//     name: 'Metairie Veterans Administration Center'
//   }
// }).then(function(project) {
//   project.createSubproject({
//     category: 'Electrical',
//     description: 'Electrical work for the project.'
//   });
//   project.createSubproject({
//     category: 'Heating, Ventilation, and Air Conditioning (HVAC)',
//     description: 'HVAC work for the project.'
//   });
//   project.createSubproject({
//     category: 'Plumbing',
//     description: 'Plumbing work for the project.'
//   });
//   project.createSubproject({
//     category: 'Painting and Paper Hanging Interior',
//     description: 'Painting and Paper Hanging Interior work for the project.'
//   });
//   project.createSubproject({
//     category: 'Painting Exterior',
//     description: 'Painting Exterior work for the project.'
//   });
//   project.createSubproject({
//     category: 'Drywall',
//     description: 'Drywall work for the project.'
//   });
// });

// db.project.findOne({
//   where: {
//     name: 'Kenner Municipal Center'
//   }
// }).then(function(project) {
//   project.createSubproject({
//     category: 'Electrical',
//     description: 'Electrical work for the project.'
//   });
//   project.createSubproject({
//     category: 'Heating, Ventilation, and Air Conditioning (HVAC)',
//     description: 'HVAC work for the project.'
//   });
//   project.createSubproject({
//     category: 'Plumbing',
//     description: 'Plumbing work for the project.'
//   });
//   project.createSubproject({
//     category: 'Painting Exterior',
//     description: 'Painting Exterior work for the project.'
//   });
//   project.createSubproject({
//     category: 'Drywall',
//     description: 'Drywall work for the project.'
//   });
//   project.createSubproject({
//     category: 'Structural Steel Work',
//     description: 'Structural Steel work for the project.'
//   });
//   project.createSubproject({
//     category: 'Landscaping',
//     description: 'Landscaping work for the project.'
//   });
// });

///////////////////////////////
// CREATING SUBCONTRACTORS ////
///////////////////////////////
// db.subcontractor.create({
//     firstName: 'Mark',
//     lastName: 'Russel',
//     email: 'mark@russelroofing.com',
//     phone: '810-515-1602',
//     addressLine1: '802 Market Blvd',
//     city: 'Metairie',
//     state: 'LA',
//     zipCode: '90210',
//     companyName: 'Russel Roofing, LLC',
//     license: '132470B'
//   }).then(function(subcontractor) {
//   console.log(subcontractor)
// });

// db.subcontractor.create({
//     firstName: 'Edward',
//     lastName: 'Picket',
//     email: 'Edward@picketconstruction.com',
//     phone: '255-888-4523',
//     addressLine1: '1705 Commerce St',
//     city: 'Jefferson',
//     state: 'LA',
//     zipCode: '90215',
//     companyName: 'Picket Construction Inc.',
//     license: '1032498C'
//   }).then(function(subcontractor) {
//   console.log(subcontractor)
// });

///////////////////////////////
// CREATING BIDS //////////////
///////////////////////////////
// db.project.findOne({
//   where: {
//     name: "Metairie Veterans Administration Center"
//   }
// }).then(function(project) {
  
//   db.subproject.findOne({
//     where: {
//       projectId: project.id,
//       category: "Electrical"
//     }
//   }).then(function(subproject) {
//     db.subcontractor.findOne({
//       where: {
//         companyName: "Russel Roofing, LLC"
//       }
//     }).then(function(subcontractor) {
//       subcontractor.createBid({
//         amount: 755000.00,
//         subprojectId: subproject.id,
//         notes: "We have a record of quality work since 1987."
//       });
//     });
//   });
// });

// db.project.findOne({
//   where: {
//     name: "Metairie Veterans Administration Center"
//   }
// }).then(function(project) {
  
//   db.subproject.findOne({
//     where: {
//       projectId: project.id,
//       category: "Electrical"
//     }
//   }).then(function(subproject) {
//     db.subcontractor.findOne({
//       where: {
//         companyName: "Picket Construction Inc."
//       }
//     }).then(function(subcontractor) {
//       subcontractor.createBid({
//         amount: 735000.00,
//         subprojectId: subproject.id,
//         notes: "Our work is done on time, to spec."
//       });
//     });
//   });
// });

db.project.findOne({
  where: {
    name: "Metairie Veterans Administration Center"
  }
}).then(function(project) {
  
  db.subproject.findOne({
    where: {
      projectId: project.id,
      category: "Drywall"
    }
  }).then(function(subproject) {
    db.subcontractor.findOne({
      where: {
        companyName: "Russel Roofing, LLC"
      }
    }).then(function(subcontractor) {
      subcontractor.createBid({
        amount: 395000.00,
        subprojectId: subproject.id,
        notes: "We have a record of quality work since 1987."
      });
    });
  });
});

db.project.findOne({
  where: {
    name: "Metairie Veterans Administration Center"
  }
}).then(function(project) {
  
  db.subproject.findOne({
    where: {
      projectId: project.id,
      category: "Drywall"
    }
  }).then(function(subproject) {
    db.subcontractor.findOne({
      where: {
        companyName: "Picket Construction Inc."
      }
    }).then(function(subcontractor) {
      subcontractor.createBid({
        amount: 360000.00,
        subprojectId: subproject.id,
        notes: "Our work is done on time, to spec."
      });
    });
  });
});

db.project.findOne({
  where: {
    name: "Kenner Municipal Center"
  }
}).then(function(project) {
  
  db.subproject.findOne({
    where: {
      projectId: project.id,
      category: "Electrical"
    }
  }).then(function(subproject) {
    db.subcontractor.findOne({
      where: {
        companyName: "Russel Roofing, LLC"
      }
    }).then(function(subcontractor) {
      subcontractor.createBid({
        amount: 605000.00,
        subprojectId: subproject.id,
        notes: "We have a record of quality work since 1987."
      });
    });
  });
});

db.project.findOne({
  where: {
    name: "Kenner Municipal Center"
  }
}).then(function(project) {
  
  db.subproject.findOne({
    where: {
      projectId: project.id,
      category: "Electrical"
    }
  }).then(function(subproject) {
    db.subcontractor.findOne({
      where: {
        companyName: "Picket Construction Inc."
      }
    }).then(function(subcontractor) {
      subcontractor.createBid({
        amount: 590000.00,
        subprojectId: subproject.id,
        notes: "Our work is done on time, to spec."
      });
    });
  });
});