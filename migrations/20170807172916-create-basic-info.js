'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('BasicInfos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			age: {
				type: Sequelize.INTEGER
			},
			location_id: {
				type: Sequelize.INTEGER
			},
			gender: {
				type: Sequelize.BOOLEAN
			},
			maritalStatus: {
				type: Sequelize.STRING
			},
			height: {
				type: Sequelize.STRING
			},
			bodyType: {
				type: Sequelize.STRING
			},
			kids: {
				type: Sequelize.BOOLEAN
			},
			occupation: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('BasicInfos');
	}
};
