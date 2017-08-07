'use strict';
module.exports = function(sequelize, DataTypes) {
	class Profile extends sequelize.Model {
		static associate(models) {
			Profile.hasOne(models.BasicInfo, {
				foreignKey: 'id'
			});
		}
	}

	Profile.init(
		{
			photo: DataTypes.BLOB,
			aboutMe: DataTypes.TEXT,
			talents: DataTypes.TEXT,
			favoriteThings: DataTypes.TEXT,
			whyImAwesome: DataTypes.TEXT,
			basicInfo_id: DataTypes.INTEGER
		},
		{ sequelize }
	);

	return Profile;
};
