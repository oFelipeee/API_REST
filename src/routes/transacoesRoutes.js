const { Router } = require('express');
const transacoesController = require('../controller/transacoesController');
const { validateTransacoes, validateTransacoesId } = require('../middlewares/validateTransacoes');

const router = Router();

router.post('/', validateTransacoes, transacoesController.create);

router.put('/:id', validateTransacoesId, validateTransacoes, transacoesController.update);

router.delete('/:id', validateTransacoesId, transacoesController.delete);

router.get('/:id', validateTransacoesId, transacoesController.getOne);

router.get('/', transacoesController.getAll);

module.exports = router;