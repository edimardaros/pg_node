'use strict';

module.exports = {
  // async up (queryInterface, Sequelize) {
  //   await queryInterface.createTable("planets", {id: Sequelize.INTEGER});
  // },
  // async down (queryInterface, Sequelize) {
  // }

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("planets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");

  }
};
