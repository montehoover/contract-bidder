///////////////////////////////
// CREATING SUBPROJECTS ///////
///////////////////////////////
db.project.findOne({
  where: {
    name: 'Metairie Veterans Administration Center'
  }
}).then(function(project) {
  project.createSubproject({
    category: 'Electrical',
    description: 'Electrical work for the project.'
  });
  project.createSubproject({
    category: 'Heating, Ventilation, and Air Conditioning (HVAC)',
    description: 'HVAC work for the project.'
  });
  project.createSubproject({
    category: 'Plumbing',
    description: 'Plumbing work for the project.'
  });
  project.createSubproject({
    category: 'Painting and Paper Hanging Interior',
    description: 'Painting and Paper Hanging Interior work for the project.'
  });
  project.createSubproject({
    category: 'Painting Exterior',
    description: 'Painting Exterior work for the project.'
  });
  project.createSubproject({
    category: 'Drywall',
    description: 'Drywall work for the project.'
  });
});

db.project.findOne({
  where: {
    name: 'Kenner Municipal Center'
  }
}).then(function(project) {
  project.createSubproject({
    category: 'Electrical',
    description: 'Electrical work for the project.'
  });
  project.createSubproject({
    category: 'Heating, Ventilation, and Air Conditioning (HVAC)',
    description: 'HVAC work for the project.'
  });
  project.createSubproject({
    category: 'Plumbing',
    description: 'Plumbing work for the project.'
  });
  project.createSubproject({
    category: 'Painting Exterior',
    description: 'Painting Exterior work for the project.'
  });
  project.createSubproject({
    category: 'Drywall',
    description: 'Drywall work for the project.'
  });
  project.createSubproject({
    category: 'Structural Steel Work',
    description: 'Structural Steel work for the project.'
  });
  project.createSubproject({
    category: 'Landscaping',
    description: 'Landscaping work for the project.'
  });
});