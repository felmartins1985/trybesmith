import { ResultSetHeader } from 'mysql2';
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
async function create(userId: number, productsIds: number[]) {
  productsIds.forEach(async (productsId) => {
    const query = `
      INSERT INTO Trybesmith.Orders (userId)
      VALUES (?)
    `;
    const values = [userId];
    const [dataInserted] = await connection.execute<ResultSetHeader>(query, values);
    const { insertId } = dataInserted;

    const query2 = `
      UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;
    `;
    const values2 = [insertId, productsId];
    await connection.execute<ResultSetHeader>(query2, values2);
  });
  return { userId, productsIds }; 
}
export default { getAll, create };