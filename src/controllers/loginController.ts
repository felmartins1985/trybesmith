import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import loginService from '../services/loginService';

const secret = 'secret';

async function getUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const { status, data, message } = await loginService.getUser(username, password);
  if (status !== 200) {
    return res.status(status).json({ message });
  }
  const token = jwt
    .sign({ username, id: data.id }, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return res.status(status).json({ token });
}
export default { getUser };