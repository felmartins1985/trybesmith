import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { IUser, User } from '../interfaces/user.interface';

async function create(user: User): Promise<void> {
  const { username, classe, level, password } = user;

  const query = `
  INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?,?,?)`;
  const values = [username, classe, level, password];

  await connection.execute<ResultSetHeader>(query, values);
}
async function getAll(): Promise<IUser[]> {
  const query = 'SELECT * FROM Trybesmith.Users';

  const [products] = await connection.execute(query);

  return products as IUser[];
}

async function getByUserName(username: string): Promise<IUser> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [products] = await connection.execute<RowDataPacket[]>(query, [username]);
  const [user] = products as IUser[];
  return user;
}

export default { create, getAll, getByUserName };