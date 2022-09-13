export interface Product {
  name: string;
  amount: string;
  orderId?: number;
}

export interface IProduct extends Product {
  id: number;
}
