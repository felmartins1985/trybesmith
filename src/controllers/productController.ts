import { Request, Response } from 'express';

import { IProduct } from '../interfaces/product.interface';
import productService from '../services/productService';

async function create(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { status, data, message } = await productService.create(product);
  if (message) {
    return res.status(status).json({ message });
  }
  res.status(status).json(data);
}
async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}
export default { create, getAll };