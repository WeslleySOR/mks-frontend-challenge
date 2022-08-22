export interface ApiResponse {
  products: ProductType[];
  count: number
}

export interface ProductType {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}