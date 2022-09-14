import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/user.interface';

async function getUser(username: string): Promise<IUser> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const values = [username];

  const [user] = await connection.execute<RowDataPacket[]>(query, values);
  const [userObject] = user as IUser[];
  return userObject;
}
export default { getUser };