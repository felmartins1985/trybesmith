import { IUser } from '../interfaces/user.interface';
import userModel from '../models/userModel';

async function create(user: IUser) {
  await userModel.create(user);
}

export default { create };