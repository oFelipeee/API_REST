const express = require('express');
const { createTransacao } = require('../controllers/transacaoController');
const router = express.Router();

router.post('/', createTransacao);

module.exports = router;
