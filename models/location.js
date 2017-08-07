'use strict';
module.exports = function(sequelize, DataTypes) {
	class Location extends sequelize.Model {}

	Location.init(
		{
			distance: DataTypes.INTEGER,
			city: DataTypes.STRING
		},
		{ sequelize }
	);

	return Location;
};
