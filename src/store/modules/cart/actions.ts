import { IProductCart } from "./types";

export function addProductToCart(product: IProductCart) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function removeProductFromCart(product: IProductCart) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: {
      product,
    },
  };
}

export function deleteProductFromCart(product: IProductCart) {
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: {
      product,
    },
  };
}
