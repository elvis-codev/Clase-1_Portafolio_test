import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Usuario = sequelize.define('Usuario', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  rol: DataTypes.STRING,
  email: DataTypes.STRING 
});
