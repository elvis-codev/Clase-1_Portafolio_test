import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/Usuario.js';

export const register = async (req, res) => {
  const { username, password, rol } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const usuario = await Usuario.create({ username, password: hash, rol });

  res.json(usuario);
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const usuario = await Usuario.findOne({ where: { username } });

  if (!usuario) return res.status(404).json({ msg: 'no_user' });

  const valido = await bcrypt.compare(password, usuario.password);

  if (!valido) return res.status(401).json({ msg: 'bad_pass' });

  const token = jwt.sign(
    { id: usuario.id, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token });
};
