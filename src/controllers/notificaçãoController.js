const Notificacao = require('../models/notificacao');
const Cliente = require('../models/cliente');
const sendNotification = require('../utils/sendNotification');

const createNotificacao = async (req, res) => {
    const { id_cliente, mensagem } = req.body;

    const cliente = await Cliente.findById(id_cliente);
    if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });

    const notificacao = new Notificacao({ id_cliente, mensagem });
    await notificacao.save();

    // Enviar e-mail de notificação
    await sendNotification(cliente.email, mensagem);

    res.status(201).json(notificacao);
};

module.exports = { createNotificacao };
