import jwt from 'jsonwebtoken';

export const auth_middleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'no_token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch {
    res.status(401).json({ msg: 'token_invalido' });
  }
};
