///////////////////////////////
// CREATING BIDS //////////////
///////////////////////////////
db.project.findOne({
  where: {
    name: "Metairie Veterans Administration Center"
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
        amount: 755000.00,
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
      category: "Electrical"
    }
  }).then(function(subproject) {
    db.subcontractor.findOne({
      where: {
        companyName: "Picket Construction Inc."
      }
    }).then(function(subcontractor) {
      subcontractor.createBid({
        amount: 735000.00,
        subprojectId: subproject.id,
        notes: "Our work is done on time, to spec."
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