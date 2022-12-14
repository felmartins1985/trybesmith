import { RowDataPacket } from 'mysql2/promise';

export interface IOrder extends RowDataPacket {
  id?: number;
  userId: number;
  productsId: number;
}
export interface IOrderProduct{
  userId: number;
  productsIds: number[];
}
