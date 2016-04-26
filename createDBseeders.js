var db = require("./models");

db.project.create({
  name: 'Metairie Veterans Administration Center',
  description: 'The Metairie VA Center is a multi-building complex supporting the administrative needs on the Southeast Region of the Department of Veterans Affairs.  The project consists of one three-story building, two auxiliary one-story buildings, parking and associated grounds works.',
}).then(function(project) {
  console.log(project)
});
