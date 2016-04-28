var db = require("./models");

///////////////////////////////
// CREATING PROJECTS //////////
///////////////////////////////
db.project.create({
  name: 'Metairie Veterans Administration Center',
  description: 'The Metairie VA Center is a multi-building complex supporting the administrative needs on the Southeast Region of the Department of Veterans Affairs.  The project consists of one three-story building, two auxiliary one-story buildings, parking and associated grounds works.',
}).then(function(project) {
  console.log(project)
});

db.project.create({
  name: 'Kenner Municipal Center',
  description: 'The Kenner Municipal Center is an administrative complex supporting the Kenner Department of Public Works.  The project consists of one six-story building, one auxiliary two-story buildings, underground parking and associated grounds works.',
}).then(function(project) {
  console.log(project)
});