const Administrador = require('../models/administrador');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const loginAdmin = async (req, res) => {
    const { email, senha } = req.body;

    const admin = await Administrador.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Administrador não encontrado' });

    const isMatch = await bcrypt.compare(senha, admin.senha);
    if (!isMatch) return res.status(400).json({ message: 'Senha inválida' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { loginAdmin };
