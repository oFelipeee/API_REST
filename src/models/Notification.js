// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./Client');

const Notification = sequelize.define('Notification', {
  ID_Notificacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Mensagem: { type: DataTypes.TEXT, allowNull: false },
  Data_Notificacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

Notification.belongsTo(Client, { foreignKey: 'ID_Cliente' });
module.exports = Notification;
