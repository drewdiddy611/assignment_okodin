'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    photo: DataTypes.BLOB,
    aboutMe: DataTypes.TEXT,
    talents: DataTypes.TEXT,
    favoriteThings: DataTypes.TEXT,
    whyImAwesome: DataTypes.TEXT,
    basicInfo_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};