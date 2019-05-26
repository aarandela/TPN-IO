'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    facebook_id: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};