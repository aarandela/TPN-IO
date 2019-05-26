'use strict';
module.exports = (sequelize, DataTypes) => {
  const urine = sequelize.define('urine', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    count: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {freezeTableName: true});
  urine.associate = function(models) {
    // associations can be defined here
  };
  return urine;
};