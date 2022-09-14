import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import loginController from './controllers/loginController';
import auth from './middlewares/auth';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.create);
app.get('/orders', orderController.getAll);
app.post('/orders', auth.verifyAuth, orderController.create);
app.post('/login', loginController.getUser);
export default app;
