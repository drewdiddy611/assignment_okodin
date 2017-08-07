'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		let users = [];
		for (let i = 0; i < 10; i++) {
			users.push({
				username: `User ${i + 1}`,
				email: `user${i + 1}@someemail.com`,
				profile_id: i + 1
			});
		}
		return queryInterface.bulkInsert('Users', users);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Users', null, {}, Sequelize.models.User);
	}
};
