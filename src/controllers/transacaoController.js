const Transacao = require('../models/transacao');
const Conta = require('../models/conta');

const createTransacao = async (req, res) => {
    const { id_conta, tipo_transacao, valor } = req.body;

    // Atualiza o saldo da conta
    const conta = await Conta.findById(id_conta);
    if (!conta) return res.status(404).json({ message: 'Conta não encontrada' });

    if (tipo_transacao === 'Débito' && conta.saldo < valor) {
        return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    if (tipo_transacao === 'Débito') {
        conta.saldo -= valor;
    } else {
        conta.saldo += valor;
    }

    await conta.save();

    const transacao = new Transacao({ id_conta, tipo_transacao, valor });
    await transacao.save();

    res.status(201).json(transacao);
};

module.exports = { createTransacao };
