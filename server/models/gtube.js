'use strict';
module.exports = (sequelize, DataTypes) => {
  const gtube = sequelize.define('gtube', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {});
  gtube.associate = function(models) {
    // associations can be defined here
  };
  return gtube;
};