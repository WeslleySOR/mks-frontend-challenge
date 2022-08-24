import Image from "next/image";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/modules/cart/actions";
import { IProduct } from "../../types/types";

import * as SC from "./style";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(
      addProductToCart({
        id: product.id,
        name: product.name,
        photo: product.photo,
        price: product.price,
      })
    );
  }, [dispatch, product.id, product.name, product.photo, product.price]);

  return (
    <SC.Container>
      <SC.Header>
        <Image
          src={product.photo}
          alt={`${product.name} Picture`}
          width="130px"
          height="160px"
        />
      </SC.Header>
      <SC.Main>
        <SC.ProductInfo>
          <span>{product.name}</span>
          <SC.ProductPrice>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          </SC.ProductPrice>
        </SC.ProductInfo>
        <span>{product.description}</span>
      </SC.Main>
      <SC.Footer data-testid="buy-product-button" onClick={() => handleAddProductToCart()}>
        <Image
          src="/shopping-bag.svg"
          alt="Bag Icon"
          width="15px"
          height="15px"
        />
        <span>COMPRAR</span>
      </SC.Footer>
    </SC.Container>
  );
}
