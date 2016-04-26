'use strict';
module.exports = function(sequelize, DataTypes) {
  var bid = sequelize.define('bid', {
    amount: DataTypes.FLOAT,
    subprojectId: DataTypes.INTEGER,
    subcontractorId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.bid.belongsTo(models.subproject)
        models.bid.belongsTo(models.subcontractor)
      }
    }
  });
  return bid;
};