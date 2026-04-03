import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/config/db.js';
import auth_routes from './src/routes/auth_routes.js';
import comanda_routes from './src/routes/comanda_routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', auth_routes);
app.use('/api/comandas', comanda_routes);

export default app;
