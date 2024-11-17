const mongoose = require('mongoose');

const transacaoSchema = new mongoose.Schema({
    id_conta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conta',
        required: true
    },
    tipo_transacao: {
        type: String,
        enum: ['Débito', 'Crédito'],
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    data_transacao: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Transacao = mongoose.model('Transacao', transacaoSchema);
module.exports = Transacao;
