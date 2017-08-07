'use strict';
module.exports = function(sequelize, DataTypes) {
	var Like = sequelize.define('Like', {
		liker_id: DataTypes.INTEGER,
		likee_id: DataTypes.INTEGER
	});
	return Like;
};
