'use strict';
module.exports = (sequelize, DataTypes) => {
  const ostomy = sequelize.define('ostomy', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    changed: DataTypes.INTEGER
  }, {freezeTableName: true});
  ostomy.associate = function(models) {
    // associations can be defined here
  };
  return ostomy;
};