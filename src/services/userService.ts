import { IUser } from '../interfaces/user.interface';
import userModel from '../models/userModel';

async function create(user: IUser) {
  await userModel.create(user);
}
async function getAll() {
  const data = await userModel.getAll();
  return { status: 200, data };
}
export default { create, getAll };