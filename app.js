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

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente', version: '1.0.0' });
});

app.use('/api/auth', auth_routes);
app.use('/api/comandas', comanda_routes);

// Inicializar BD SIEMPRE (en desarrollo Y en Vercel)
const iniciar = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Base de datos conectada - ok');
  } catch (e) {
    console.error('Error conectando BD:', e);
  }
};

iniciar();

// Solo en desarrollo: escuchar en puerto local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}

export default app;

