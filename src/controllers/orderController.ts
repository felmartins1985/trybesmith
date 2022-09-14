import { Request, Response } from 'express';
import orderService from '../services/orderService';

interface NewRequest extends Request{
  userId:number;
}
async function getAll(_req: Request, res: Response) {
  const data = await orderService.getAll();
  res.status(200).json(data);
}

async function create(req: Request, res: Response) {
  const { userId } = req as NewRequest;
  const { productsIds } = req.body;
  const { status, message, order } = await orderService.create(userId, productsIds);
  if (message) {
    return res.status(status).json({ message });
  }
  res.status(status).json(order);
}
export default { getAll, create };