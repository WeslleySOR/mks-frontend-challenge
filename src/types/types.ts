export interface ApiResponse {
  products: IProduct[];
  count: number;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}
