'use strict';
module.exports = function(sequelize, DataTypes) {
	class BasicInfo extends sequelize.Model {
		static associate(models) {
			BasicInfo.hasOne(models.Location, {
				foreignKey: 'id'
			});
		}
	}

	BasicInfo.init(
		{
			age: DataTypes.INTEGER,
			location_id: DataTypes.INTEGER,
			gender: DataTypes.BOOLEAN,
			maritalStatus: DataTypes.STRING,
			height: DataTypes.STRING,
			bodyType: DataTypes.STRING,
			kids: DataTypes.BOOLEAN,
			occupation: DataTypes.STRING
		},
		{ sequelize }
	);

	return BasicInfo;
};
