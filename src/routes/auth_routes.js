import express from 'express';
import * as auth_controller from '../controllers/auth_controller.js';

const router = express.Router();

router.post('/register', auth_controller.register);
router.post('/login', auth_controller.login);

export default router;
