import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';

const JWT_SECRET = 'secret';
interface NewRequest extends Request {
  userId?:number;
}
interface UserLogin {
  id:number,
  username:string,
}
async function verifyAuth(req: NewRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { username } = jwt.verify(token, JWT_SECRET) as UserLogin;
    const user = await userService.getByUserName(username); 
    req.userId = user.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default { verifyAuth };