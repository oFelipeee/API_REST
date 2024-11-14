// controllers/transactionController.js
const { Transaction, Notification, Account } = require('../models');

exports.createTransaction = async (req, res) => {
  const { ID_Conta, Tipo, Valor } = req.body;
  const transaction = await Transaction.create({ ID_Conta, Tipo, Valor });
  
  const account = await Account.findByPk(ID_Conta);
  if (Tipo === 'deposito') {
    account.Saldo += Valor;
  } else if (Tipo === 'retirada') {
    account.Saldo -= Valor;
  }
  await account.save();
  
  await Notification.create({
    ID_Cliente: account.ID_Cliente,
    Mensagem: `Transação de ${Valor} realizada.`,
  });

  res.status(201).json(transaction);
};
