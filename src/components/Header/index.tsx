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

  var total = cart.reduce(function(res,item) {
    return res + (item.quantity);
  }, 0);
  return (
    <SC.Container>
      <SC.Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </SC.Logo>
      <SC.Cart onClick={handleOpenedCard}>
        <Image src="/cart-icon.svg" width="12px" height="12px" />
        <span>{total}</span>
      </SC.Cart>
    </SC.Container>
  );
}
