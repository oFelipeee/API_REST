const mongoose = require('mongoose');

const contaSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipo_conta: {
        type: String,
        enum: ['Corrente', 'Poupança', 'Salário', 'Mista', 'Digital', 'Universitária', 'Conjunta', 'Solidária'],
        required: true
    },
    saldo: {
        type: Number,
        required: true,
        default: 0
    }

}, { timestamps: true });

const Conta = mongoose.model('Conta', contaSchema);
module.exports = Conta;
