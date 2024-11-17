const Conta = require('../models/conta');

const getContas = async (req, res) => {
    const contas = await Conta.find().populate('id_cliente');
    res.json(contas);
};

const createConta = async (req, res) => {
    const { id_cliente, tipo_conta, saldo } = req.body;
    const conta = new Conta({ id_cliente, tipo_conta, saldo });
    await conta.save();
    res.status(201).json(conta);
};

module.exports = { getContas, createConta };
