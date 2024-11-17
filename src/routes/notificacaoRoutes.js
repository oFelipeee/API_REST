const express = require('express');
const { createNotificacao } = require('../controllers/notificaçãoController');
const router = express.Router();

router.post('/', createNotificacao);

module.exports = router;
