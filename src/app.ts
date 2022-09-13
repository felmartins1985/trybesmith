import express from 'express';
import productController from './controllers/productController';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
export default app;
