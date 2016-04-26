'use strict';
module.exports = function(sequelize, DataTypes) {
  var subproject = sequelize.define('subproject', {
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    projectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.subproject.belongsTo(models.project)
        models.subproject.hasMany(models.bid)
      }
    }
  });
  return subproject;
};