import Image from "next/image";
import * as SC from "./style";

interface HeaderProps {
  handleOpenedCard: () => void;
}

export function Header({ handleOpenedCard }: HeaderProps) {
  return (
    <SC.Container>
      <SC.Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </SC.Logo>
      <SC.Cart onClick={handleOpenedCard}>
        <Image src="/cart-icon.svg" width="12px" height="12px" />
        <span>0</span>
      </SC.Cart>
    </SC.Container>
  );
}
