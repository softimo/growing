'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Skus',
      'precio',
       Sequelize.FLOAT
     )
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.removeColumn('Sku','precio');
     
  }
};
