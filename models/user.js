"use strict";
const Model = require("sequelize").Model;

module.exports = function(sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: "profile_id" });
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_id: DataTypes.INTEGER
    },
    { sequelize }
  );
};
