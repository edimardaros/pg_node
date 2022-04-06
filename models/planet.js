const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const planet = sequelize.define('planets', { 
  name : DataTypes.STRING, 
  position : DataTypes.INTEGER
});

module.exports = planet;