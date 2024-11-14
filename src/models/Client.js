// models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
  ID_Cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nome_Cliente: { type: DataTypes.STRING, allowNull: false },
  Email: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = Client;
