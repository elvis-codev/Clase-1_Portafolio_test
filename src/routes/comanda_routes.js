import express from 'express';
import * as comanda_controller from '../controllers/comanda_controller.js';
import { auth_middleware } from '../middlewares/auth_middleware.js';

const router = express.Router();

router.use(auth_middleware);

router.get('/', comanda_controller.listar_comandas);
router.post('/', comanda_controller.crear_comanda);
router.patch('/:id/lista', comanda_controller.marcar_lista);

export default router;
