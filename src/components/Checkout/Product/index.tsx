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
  }, [dispatch, item.product.id, item.product.name, item.product.photo, item.product.price]);

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
  }, [dispatch, item.product.id, item.product.name, item.product.photo, item.product.price]);

  return (
    <SC.Container>
      <SC.ProductRemoveButton data-testid="delete-product-button" onClick={() => handleDeleteItemFromCart()}>
        X
      </SC.ProductRemoveButton>
      <SC.Main>
        <SC.ProductNextImage>
          <Image src={item.product.photo} layout="fill" objectFit="contain" />
        </SC.ProductNextImage>
        <span>{item.product.name}</span>
      </SC.Main>
      <SC.Footer>
        <SC.CustomInput>
          <span>Qtd:</span>
          <SC.CustomInputButton data-testid="remove-product-button" onClick={() => handleRemoveItemFromCart()}>
            -
          </SC.CustomInputButton>
          <SC.CustomInputSpan>{item.quantity}</SC.CustomInputSpan>
          <SC.CustomInputButton data-testid="add-product-button" onClick={() => handleAddItemToCart()}>
            +
          </SC.CustomInputButton>
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
