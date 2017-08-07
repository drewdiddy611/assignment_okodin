'use strict';
module.exports = function(sequelize, DataTypes) {
  var BasicInfo = sequelize.define('BasicInfo', {
    age: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    gender: DataTypes.BOOLEAN,
    maritalStatus: DataTypes.STRING,
    height: DataTypes.STRING,
    bodyType: DataTypes.STRING,
    kids: DataTypes.BOOLEAN,
    occupation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BasicInfo;
};