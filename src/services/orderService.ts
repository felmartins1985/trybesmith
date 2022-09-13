import orderModel from '../models/orderModel';
import { IOrder } from '../interfaces/order.interface';

async function getAll(): Promise<IOrder[]> {
  const orders = await orderModel.getAll();
  return orders;
}
  
export default { getAll };