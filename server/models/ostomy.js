'use strict'
module.exports = (sequelize, DataTypes) => {
  const ostomy = sequelize.define('ostomy', {
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    changed: DataTypes.INTEGER
  }, { freezeTableName: true })
  ostomy.associate = function (models) {
    // associations can be defined here
    ostomy.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
  }
  return ostomy
}
