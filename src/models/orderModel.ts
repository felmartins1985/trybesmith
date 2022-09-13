import connection from './connection';
import { IOrder } from '../interfaces/order.interface';

async function getAll(): Promise<IOrder[]> {
  const result = await connection
    .execute<IOrder[]>(`SELECT o.id, o.userId, p.id as productsIds FROM 
    Trybesmith.Orders as o 
    JOIN Trybesmith.Products as p ON o.id = p.orderId;`);
  const [rows] = result;
  const newArray: any = [];
  rows.forEach((row) => {
    const { id, productsIds, userId } = row;
    console.log(productsIds);
    const order = newArray.find((orde: any) => orde.id === id);
    if (order) {
      order.productsIds = [...order.productsIds, productsIds];              
    } else {
      newArray.push({ id, userId, productsIds: [productsIds] });
    }
  });
  return newArray;
}
export default { getAll };