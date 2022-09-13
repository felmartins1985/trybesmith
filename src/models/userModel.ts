import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { User } from '../interfaces/user.interface';

async function create(user: User): Promise<void> {
  const { username, classe, level, password } = user;

  const query = `
  INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?,?,?)`;
  const values = [username, classe, level, password];

  await connection.execute<ResultSetHeader>(query, values);
}
export default { create };