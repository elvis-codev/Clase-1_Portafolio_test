import dotenv from 'dotenv';
import app from '../app.js';
import { sequelize } from '../src/config/db.js';

dotenv.config();

// Inicializar base de datos al levantar el servidor
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Base de datos conectada - ok');
  } catch (e) {
    console.error('Error conectando a BD:', e);
  }
})();

export default app;
