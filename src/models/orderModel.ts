import connection from './connection';
import { IOrder } from '../interfaces/order.interface';

async function getAll(): Promise<IOrder[]> {
  const result = await connection
    .execute<IOrder[]>(`SELECT o.id AS id, o.userId AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY userId ASC`);
  const [rows] = result;
  // const newArray: any = [];
  // rows.forEach((row) => {
  //   const { id, productsIds, userId } = row;
  //   const order = newArray.find((orde: any) => orde.id === id);
  //   if (order) {
  //     order.productsIds = [...order.productsIds, productsIds];              
  //   } else {
  //     newArray.push({ id, userId, productsIds: [productsIds] });
  //   }
  // });
  // return newArray;
  return rows;
}
export default { getAll };