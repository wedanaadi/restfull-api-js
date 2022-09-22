'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employes', [{
      employe_name: 'John',
      employe_role: 'analis',
      employe_phone_number: '089438476574',
      employe_address: 'alamat employe',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
