const express = require('express');
const { getContas, createConta } = require('../controllers/contaController');
const router = express.Router();

router.get('/', getContas);
router.post('/', createConta);

module.exports = router;
