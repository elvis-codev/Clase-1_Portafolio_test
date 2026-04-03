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

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente', version: '1.0.0' });
});

const iniciar = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Base de datos conectada - ok');
    app.listen(SERVER_PORT, () => console.log(`Servidor corriendo`));
  } catch (e) {
    console.error(e);
  }
};

iniciar();

