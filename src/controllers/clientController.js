// controllers/clientController.js
const Client = require('../models/Client');

exports.createClient = async (req, res) => {
  const { Nome_Cliente, Email } = req.body;
  const client = await Client.create({ Nome_Cliente, Email });
  res.status(201).json(client);
};

exports.getClients = async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
};
