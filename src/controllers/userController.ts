import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { IUser } from '../interfaces/user.interface';
import userService from '../services/userService';

const secret = 'secret';
async function create(req: Request, res: Response) {
  await userService.create(req.body as IUser);
  const { username } = req.body;
  const token = jwt.sign({ username }, secret, { expiresIn: '7d', algorithm: 'HS256' });
  res.status(201).json({ token });  
}
async function getAll(_req: Request, res: Response) {
  const { status, data } = await userService.getAll();
  res.status(status).json(data);
}
export default { create, getAll };