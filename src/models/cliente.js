const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome_cliente: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
