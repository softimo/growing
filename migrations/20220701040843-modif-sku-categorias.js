'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Skus',
      'categoria',
       Sequelize.STRING
     )
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.removeColumn('Skus','categoria');
     
  }
};
