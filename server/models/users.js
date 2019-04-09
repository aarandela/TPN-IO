'use strict'
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {})
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.gtube, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
    users.hasMany(models.urine, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
    users.hasMany(models.ostomy, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
  }
  return users
}
