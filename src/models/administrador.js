const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const administradorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        nique: true
    },
    idade: {
        type: Number,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
}, { timestamps: true });

administradorSchema.pre('save', async function (next) {
    if (this.isModified('senha')) {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
    }
    next();
});

const Administrador = mongoose.model('Administrador', administradorSchema);
module.exports = Administrador;
