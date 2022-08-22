import Image from "next/image";
import { ProductType } from '../../types/types'

import * as SC from "./style";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  return (
    <SC.Container>
      <SC.Header>
        <Image src='/iphone-x.png' width='130px' height='160px'/>
      </SC.Header>
      <SC.Main>
        <div>
          <span>{product.name}</span>
          <div>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
          </div>
        </div>
        <span>{product.description}</span>
      </SC.Main>
      <SC.Footer>
        <Image src='/shopping-bag.svg' width='15px' height='15px'/>
        <span>COMPRAR</span>
      </SC.Footer>
    </SC.Container>
  )
}