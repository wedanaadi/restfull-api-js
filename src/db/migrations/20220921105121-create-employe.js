'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employes', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      employe_name: {
        type: Sequelize.STRING(100)
      },
      employe_role: {
        type: Sequelize.ENUM('enginner','hrd','analis')
      },
      employe_phone_number: {
        type: Sequelize.STRING(20)
      },
      employe_address: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('Employes');
  }
};