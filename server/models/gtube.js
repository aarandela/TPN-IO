'use strict'
module.exports = (sequelize, DataTypes) => {
  const gtube = sequelize.define('gtube', {
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, { freezeTableName: true })
  gtube.associate = function (models) {
    // associations can be defined here
    gtube.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
  }
  return gtube
}
