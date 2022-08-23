import Image from "next/image";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../../../store/modules/cart/actions";

import { ICartItem } from "../../../store/modules/cart/types";

import * as SC from "./style";

interface ItemProps {
  item: ICartItem;
}

export function ItemCart({ item }: ItemProps) {
  const dispatch = useDispatch();

  const handleAddItemToCart = useCallback(() => {
    dispatch(
      addProductToCart({
        id: item.product.id,
        name: item.product.name,
        photo: item.product.photo,
        price: item.product.price,
      })
    );
  }, [dispatch]);

  const handleRemoveItemFromCart = useCallback(() => {
    dispatch(
      removeProductFromCart({
        id: item.product.id,
        name: item.product.name,
        photo: item.product.photo,
        price: item.product.price,
      })
    );
  }, [dispatch]);

  const handleDeleteItemFromCart = useCallback(() => {
    dispatch(
      deleteProductFromCart({
        id: item.product.id,
        name: item.product.name,
        photo: item.product.photo,
        price: item.product.price,
      })
    );
  }, [dispatch]);

  return (
    <SC.Container>
      <SC.ProductRemoveButton
        onClick={() => handleDeleteItemFromCart()}
      >X</SC.ProductRemoveButton>
      <SC.Main>
        <Image src={item.product.photo} width="60px" height="75px" />
        <span>{item.product.name}</span>
      </SC.Main>
      <SC.Footer>
        <SC.CustomInput>
          <button onClick={() => handleRemoveItemFromCart()}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleAddItemToCart()}>+</button>
        </SC.CustomInput>
        <SC.ProductTotal>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.product.price * item.quantity)}
          </span>
        </SC.ProductTotal>
      </SC.Footer>
    </SC.Container>
  );
}
