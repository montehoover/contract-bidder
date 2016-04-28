var db = require("../models");

///////////////////////////////
// CREATING SUBCONTRACTORS ////
///////////////////////////////
db.subcontractor.create({
    firstName: 'Mark',
    lastName: 'Russel',
    email: 'mark@russelroofing.com',
    phone: '810-515-1602',
    addressLine1: '802 Market Blvd',
    city: 'Metairie',
    state: 'LA',
    zipCode: '90210',
    companyName: 'Russel Roofing, LLC',
    license: '132470B'
  }).then(function(subcontractor) {
  console.log(subcontractor)
});

db.subcontractor.create({
    firstName: 'Edward',
    lastName: 'Picket',
    email: 'Edward@picketconstruction.com',
    phone: '255-888-4523',
    addressLine1: '1705 Commerce St',
    city: 'Jefferson',
    state: 'LA',
    zipCode: '90215',
    companyName: 'Picket Construction Inc.',
    license: '1032498C'
  }).then(function(subcontractor) {
  console.log(subcontractor)
});