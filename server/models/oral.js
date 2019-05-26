'use strict';
module.exports = (sequelize, DataTypes) => {
  const oral = sequelize.define('oral', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {freezeTableName: true});
  oral.associate = function(models) {
    // associations can be defined here
  };
  return oral;
};