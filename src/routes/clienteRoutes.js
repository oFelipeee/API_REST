const { Router } = require('express');
const clienteController = require('../controller/clienteController');
const { validateCliente, validateClienteId } = require('../middlewares/validateCliente');

const router = Router();

router.post('/', validateCliente, clienteController.create);

router.put('/:id', validateClienteId, validateCliente, clienteController.update);

router.delete('/:id', validateClienteId, clienteController.delete);

router.get('/:id', validateClienteId, clienteController.getOne);

router.get('/', clienteController.getAll);

module.exports = router;