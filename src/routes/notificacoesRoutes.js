const { Router } = require('express');
const notificacoesController = require('../controller/notificacoesController');
const { validateNotificacoes, validateNotificacoesId } = require('../middlewares/validateNotificacoes');

const router = Router();

router.post('/', validateNotificacoes, notificacoesController.create);

router.put('/:id', validateNotificacoesId, validateNotificacoes, notificacoesController.update);

router.delete('/:id', validateNotificacoesId, notificacoesController.delete);

router.get('/:id', validateNotificacoesId, notificacoesController.getOne);

router.get('/', notificacoesController.getAll);

module.exports = router;