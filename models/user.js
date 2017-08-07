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

		static exists(username) {
			let found = false;
			return User.count({
				where: {
					username: username
				}
			}).then(count => {
				return new Promise((resolve, reject) => {
					if (count > 0) resolve(true);
					reject('Error: User does not exist!');
				});
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
