import { IProductCart } from "./types";

export function addProductToCart(product: IProductCart) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
