import { Request, Response } from 'express';

import { IProduct } from '../interfaces/product.interface';
import productService from '../services/productService';

async function create(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);

  res.status(status).json(data);
}
export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}
export default { create, getAll };