'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_user = sequelize.define('tb_user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  tb_user.associate = function(models) {
    // associations can be defined here
  };
  return tb_user;
};