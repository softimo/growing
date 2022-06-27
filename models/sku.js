'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sku.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    existencias: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sku',
  });
  return Sku;
};