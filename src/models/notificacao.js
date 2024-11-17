const mongoose = require('mongoose');

const notificacaoSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    mensagem: {
        type: String,
        required: true
    },
    data_notificacao: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

const Notificacao = mongoose.model('Notificacao', notificacaoSchema);
module.exports = Notificacao;
