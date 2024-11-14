// app.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');

app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);

module.exports = app;
