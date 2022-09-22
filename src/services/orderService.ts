import orderModel from '../models/orderModel';
import { IOrder, IOrderProduct } from '../interfaces/order.interface';

interface Objeto {
  status: number;
  message?: string;
  order?: IOrderProduct;
}
function validateProducts(produts: number[]) {
  if (!produts) {
    return { status: 400, message: '"productsIds" is required' };
  }
  if (!Array.isArray(produts)) {
    return { status: 422, message: '"productsIds" must be an array' };
  }
  if (produts.length === 0) {
    return { status: 422, message: '"productsIds" must include only numbers' };
  }
  return true;
}

async function getAll(): Promise<IOrder[]> {
  const orders = await orderModel.getAll();
  return orders;
}

async function create(userId: number, productsIds: number[]): Promise<Objeto> {
  const validate = validateProducts(productsIds);
  if (validate !== true) {
    return validate;
  } 
  const order = await orderModel.create(userId, productsIds);
  return { status: 201, order };
}
export default { getAll, create };