'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
    // Add location fields
  }, {
    classMethods: {
      associate: function(models) {
        models.project.hasMany(models.subproject);
      }
    }
  });
  return project;
};