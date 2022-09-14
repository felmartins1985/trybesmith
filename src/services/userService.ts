import { IUser } from '../interfaces/user.interface';
import userModel from '../models/userModel';

const validateName = (name: string) => {
  if (!name || name === '') {
    return { status: 400, message: '"username" is required' };
  }
  if (typeof name !== 'string') {
    return { status: 422, message: '"username" must be a string' };
  }
  if (name.length < 3) {
    return { status: 422, message: '"username" length must be at least 3 characters long' };
  }
  return true;
};
const validateClasse = (classe: string | undefined) => {
  if (!classe || classe === '') {
    return { status: 400, message: '"classe" is required' };
  }
  if (typeof classe !== 'string') {
    return { status: 422, message: '"classe" must be a string' };
  }
  if (classe.length < 3) {
    return { status: 422, message: '"classe" length must be at least 3 characters long' };
  }
  return true;
};
const validateLevel = (level: any) => {
  if (level < 1) {
    return { status: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (!level) {
    return { status: 400, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return { status: 422, message: '"level" must be a number' };
  }
  return true;
};

const validatePassword = (password: string) => {
  if (!password || password === '') {
    return { status: 400, message: '"password" is required' };
  }
  if (typeof password !== 'string') {
    return { status: 422, message: '"password" must be a string' };
  }
  if (password.length < 8) {
    return { status: 422, message: '"password" length must be at least 8 characters long' };
  }
  return true;
};
async function create(user: IUser): Promise<any> {
  const { username, classe, level, password } = user;
  const createName = validateName(username);
  if (createName !== true) { 
    return createName;
  }
  const createClasse = validateClasse(classe);
  if (createClasse !== true) {
    return createClasse;
  }
  const createLevel = validateLevel(level);
  if (createLevel !== true) {
    return createLevel;
  }
  const createPassword = validatePassword(password);
  if (createPassword !== true) {
    return createPassword;
  }
  await userModel.create(user);
}
async function getAll() {
  const data = await userModel.getAll();
  return { status: 200, data };
}
async function getByUserName(username: string) {
  const data = await userModel.getByUserName(username);
  return data;
}
export default { create, getAll, getByUserName };