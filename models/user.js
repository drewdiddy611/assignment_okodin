'use strict';
const sequelize = require('sequelize');
const { Model, DataTypes } = sequelize;

class User extends Model {}

// Initialize the model.
User.init(
	{
		fname: DataTypes.STRING,
		lname: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING
	},
	{
		sequelize
	}
);

// Add class methods with:
// User.[classMethod] = () => {}

// Add instance methods with:
// User.prototype.[classMethod] => () => {}

module.exports = User;
