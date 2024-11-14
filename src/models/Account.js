// models/Account.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./Client');

const Account = sequelize.define('Account', {
  ID_Conta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Saldo: { type: DataTypes.DECIMAL(18, 2), allowNull: false },
});

Account.belongsTo(Client, { foreignKey: 'ID_Cliente' });
module.exports = Account;
