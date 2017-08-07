'use strict';

module.exports = function(sequelize, DataTypes) {
	class User extends sequelize.Model {
		static associate(models) {
			User.hasOne(models.Profile, {
				foreignKey: 'id'
			});
			User.belongsToMany(models.User, {
				as: 'Likers',
				through: models.Like,
				foreignKey: 'likee_id',
				otherKey: 'liker_id'
			});
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

	return User;
};
