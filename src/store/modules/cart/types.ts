export interface IProductCart {
  id: number;
  name: string;
  photo: string;
  price: number;
}

export interface ICartItem {
  product: IProductCart;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
