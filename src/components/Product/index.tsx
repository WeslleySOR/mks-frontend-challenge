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
  }, [dispatch]);

  return (
    <SC.Container>
      <SC.Header>
        <Image src={product.photo} width="130px" height="160px" />
      </SC.Header>
      <SC.Main>
        <div>
          <span>{product.name}</span>
          <div>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          </div>
        </div>
        <span>{product.description}</span>
      </SC.Main>
      <SC.Footer
        onClick={() => handleAddProductToCart()}
      >
        <Image src="/shopping-bag.svg" width="15px" height="15px" />
        <span>COMPRAR</span>
      </SC.Footer>
    </SC.Container>
  );
}
