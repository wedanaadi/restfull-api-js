'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employe.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    employe_name: DataTypes.STRING,
    employe_role: DataTypes.ENUM('enginner','hrd','analis'),
    employe_phone_number: DataTypes.STRING,
    employe_address: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: new Date().getTime()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: new Date().getTime()
    },
  }, {
    sequelize,
    modelName: 'Employe',
    timestamps: false
  });
  return Employe;
};