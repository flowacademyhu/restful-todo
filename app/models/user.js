'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    encryptedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    setterMethods: {
      password: function (password) {
        let encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        this.setDataValue('encryptedPassword', encryptedPassword);
      }
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Todo, { foreignKey: 'userId' });
  };
  return User;
};