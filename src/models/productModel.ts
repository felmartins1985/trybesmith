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

export default { create };