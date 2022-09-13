import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IProduct, Product } from '../interfaces/product.interface';

async function create(product: Product): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}
async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products as IProduct[];
}
export default { create, getAll };