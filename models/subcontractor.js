'use strict';
module.exports = function(sequelize, DataTypes) {
  var subcontractor = sequelize.define('subcontractor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    companyName: DataTypes.STRING,
    license: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.subcontractor.hasMany(models.bid)
      }
    }
  });
  return subcontractor;
};