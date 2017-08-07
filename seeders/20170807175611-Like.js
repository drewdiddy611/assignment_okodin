'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		let likes = [],
			i = 0;
		while (likes.length < 10) {
			if (!!Math.random() * 2) {
				likes.push({
					liker_id: i + 1,
					likee_id: 1 + Math.floor(Math.random() * 10)
				});
			}
			i++;
			if (i == 10) {
				i = 0;
			}
		}
		return queryInterface.bulkInsert('Likes', likes);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Likes', null, {}, Sequelize.models.Like);
	}
};
