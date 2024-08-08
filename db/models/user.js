'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Score }) {
      this.hasMany(Score, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};