'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		let infoEntityArray = [];
		for (let i = 0; i < 10; i++) {
			infoEntityArray.push({
				age: 1 + Math.floor(Math.random() * 10 + 13),
				location_id: i + 1,
				gender: !!(Math.random() + 1),
				maritalStatus: 'Single',
				height: '5\' 11"',
				bodyType: 'God-like',
				kids: !!(Math.random() + 1),
				occupation: 'Lorem ipsum'
			});
		}
		return queryInterface.bulkInsert('BasicInfos', infoEntityArray);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete(
			'BasicInfos',
			null,
			{},
			Sequelize.models.BasicInfo
		);
	}
};
