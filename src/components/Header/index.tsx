import Image from "next/image";
import * as SC from "./style";

export function Header() {
  return (
    <SC.Container>
      <SC.Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </SC.Logo>
      <SC.Cart>
        <Image src='/cart-icon.svg' width='12px' height='12px'/>
        <span>0</span>
      </SC.Cart>
    </SC.Container>
  )
}