import { RowDataPacket } from 'mysql2/promise';

export interface IOrder extends RowDataPacket {
  id?: any;
  userId: any;
  productsId: any;
} 
