'use strict';
const Model = require("sequelize").Model

module.exports = function(sequelize, DataTypes) {
  class Location extends Model;

  Location.init(
    {
      distance: DataTypes.INTEGER,
        city: DataTypes.STRING
    },
    { sequelize }
  );
};

return Location;
