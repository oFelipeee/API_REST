// routes/clientRoutes.js
const express = require('express');
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/', authMiddleware, clientController.createClient);
router.get('/', authMiddleware, clientController.getClients);
module.exports = router;
