import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/config/db.js';
import auth_routes from './src/routes/auth_routes.js';
import comanda_routes from './src/routes/comanda_routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
let dbInitialized = false;

app.use(express.json());
app.use(cors());

// Middleware para inicializar BD en la primera solicitud
app.use(async (req, res, next) => {
  if (!dbInitialized) {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      dbInitialized = true;
      console.log('Base de datos conectada - ok');
    } catch (e) {
      console.error('Error conectando a BD:', e);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }
  next();
});

app.use('/api/auth', auth_routes);
app.use('/api/comandas', comanda_routes);

app.get('/', (req, res) => {
  res.json({ message: 'API en funcionamiento' });
});

export default app;
