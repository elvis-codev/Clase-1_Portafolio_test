import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Comanda = sequelize.define('Comanda', {
  texto: DataTypes.STRING,
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fecha_lista: DataTypes.DATE,
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente'
  },
  mesa: {
    type: DataTypes.STRING,
    defaultValue: 'llevar'
  },
  personas: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id'
    } 
  } 

});
