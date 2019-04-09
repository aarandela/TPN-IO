'use strict'
module.exports = (sequelize, DataTypes) => {
  const urine = sequelize.define('urine', {
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    count: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, { freezeTableName: true })
  urine.associate = function (models) {
    // associations can be defined here
    urine.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
  }
  return urine
}
