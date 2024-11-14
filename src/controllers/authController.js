// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const admin = await Admin.findOne({ where: { email } });
  
  if (admin && bcrypt.compareSync(senha, admin.senha)) {
    const token = jwt.sign({ id: admin.ID_Administrador }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  
  return res.status(401).json({ error: 'Credenciais inválidas' });
};
