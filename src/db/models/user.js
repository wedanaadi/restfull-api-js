'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
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
    modelName: 'User',
    timestamps: false
  });
  return User;
};