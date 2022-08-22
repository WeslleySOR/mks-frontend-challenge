import Image from "next/image";
import * as SC from "./style";

export function Product() {
  return (
    <SC.Container>
      <SC.Header>
        <Image src='/apple-watch.png' width='130px' height='158px'/>
      </SC.Header>
      <SC.Main>
        <div>
          <span>Apple Watch Series 4 GPS</span>
          <div>
            <span>R$399</span>
          </div>
        </div>
        <span>Redesigned from scratch and completely revised.</span>
      </SC.Main>
      <SC.Footer>
        <Image src='/shopping-bag.svg' width='15px' height='15px'/>
        <span>COMPRAR</span>
      </SC.Footer>
    </SC.Container>
  )
}