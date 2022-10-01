'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING(130)
      },
      password: {
        type: Sequelize.STRING
      },
      refreshToken: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING(15)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};