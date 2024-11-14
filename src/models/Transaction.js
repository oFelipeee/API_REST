// models/Transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Account = require('./Account');

const Transaction = sequelize.define('Transaction', {
  ID_Transacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Tipo: { type: DataTypes.STRING, allowNull: false },
  Valor: { type: DataTypes.DECIMAL(18, 2), allowNull: false },
  Data_Transacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

Transaction.belongsTo(Account, { foreignKey: 'ID_Conta' });
module.exports = Transaction;
