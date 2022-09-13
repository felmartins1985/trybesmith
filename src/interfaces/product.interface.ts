export interface Product {
  name: string;
  amount: string;
}

export interface IProduct extends Product {
  id: number;
}
