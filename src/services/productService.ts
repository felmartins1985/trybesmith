import { IProduct } from '../interfaces/product.interface';
import productModel from '../models/productModel';

async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}
async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}

export default { create, getAll };
