import Image from "next/image";

import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

import * as SC from "./style";

interface HeaderProps {
  handleOpenedCard: () => void;
}

export function Header({ handleOpenedCard }: HeaderProps) {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  var quantityItemsSum = cart.reduce(function (res, item) {
    return res + item.quantity;
  }, 0);

  return (
    <SC.Container>
      <SC.Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </SC.Logo>
      <SC.Cart onClick={handleOpenedCard}>
        <SC.CartNextImage>
          <Image
            src="/cart-icon.svg"
            alt="Cart Icon"
            layout="fill"
            objectFit="contain"
          />
        </SC.CartNextImage>
        <span>{quantityItemsSum}</span>
      </SC.Cart>
    </SC.Container>
  );
}
