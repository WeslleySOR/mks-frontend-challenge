import Image from "next/image";
import { Cart, Container, Logo } from "./style";

export function Header() {
  return (
    <Container>
      <Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </Logo>
      <Cart>
        <Image src='/cart-icon.svg' width='12px' height='12px'/>
        <span>0</span>
      </Cart>
    </Container>
  )
}