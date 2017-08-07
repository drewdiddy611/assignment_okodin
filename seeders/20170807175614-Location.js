'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		let locations = [];
		for (let i = 0; i < 10; i++) {
			locations.push({
				distance: 1 + Math.floor(Math.random() * (1 + Math.random() + 10)),
				city: 'Some Cool City Bruh'
			});
		}
		return queryInterface.bulkInsert('Locations', locations);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete(
			'Locations',
			null,
			{},
			Sequelize.models.Location
		);
	}
};
