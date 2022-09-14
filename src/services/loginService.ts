import { IUser } from '../interfaces/user.interface';
import loginModel from '../models/loginModel';

const validateUserPassword = (username: string, password: string) => {
  if (!username || username === '') {
    return { status: 400, message: '"username" is required' };
  }
  if (!password || password === '') {
    return { status: 400, message: '"password" is required' };
  }
  return true;
};

const validateUser = (user: IUser, password: string) => {
  if (!user) {
    return { status: 401, message: 'Username or password invalid' };
  }
  if (user.password !== password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  return true;
};
async function getUser(username: string, password: string): Promise<any> {
  const validate = validateUserPassword(username, password);
  if (validate !== true) {
    return validate;
  }
  const user = await loginModel.getUser(username);
  const validateUserResult = validateUser(user, password);
  if (validateUserResult !== true) {
    return validateUserResult;
  }

  return { status: 200, data: user };
}

export default { getUser };