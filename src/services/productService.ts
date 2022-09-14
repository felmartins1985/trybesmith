import { IProduct } from '../interfaces/product.interface';
import productModel from '../models/productModel';

const validateName = (name: string) => {
  if (!name || name === '') {
    return { status: 400, message: '"name" is required' };
  }
  if (typeof name !== 'string') {
    return { status: 422, message: '"name" must be a string' };
  }
  if (name.length < 3) {
    return { status: 422, message: '"name" length must be at least 3 characters long' };
  }
  return true;
};
const validateAmount = (amount: string) => {
  if (!amount || amount === '') {
    return { status: 400, message: '"amount" is required' };
  }
  if (typeof amount !== 'string') {
    return { status: 422, message: '"amount" must be a string' };
  }
  if (amount.length < 3) {
    return { status: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return true;
};

async function create(product: IProduct): Promise<any> {
  const data = await productModel.create(product);
  const { name, amount } = data;
  const validateCreateName = validateName(name);
  if (validateCreateName !== true) {
    return validateCreateName;
  }
  const validateCreateAmount = validateAmount(amount);
  if (validateCreateAmount !== true) {
    return validateCreateAmount;
  }
  return { status: 201, data };
}
async function getAll() {
  const data = await productModel.getAll();

  return { status: 200, data };
}

export default { create, getAll };
