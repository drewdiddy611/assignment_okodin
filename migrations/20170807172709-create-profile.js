'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.BLOB
      },
      aboutMe: {
        type: Sequelize.TEXT
      },
      talents: {
        type: Sequelize.TEXT
      },
      favoriteThings: {
        type: Sequelize.TEXT
      },
      whyImAwesome: {
        type: Sequelize.TEXT
      },
      basicInfo_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.fn('NOW');

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.fn('NOW');

      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Profiles');
  }
};
