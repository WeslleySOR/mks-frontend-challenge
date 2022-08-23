import Image from "next/image";

import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";
import { ItemCart } from "./Product";

import * as SC from "./style";

interface ICheckout {
  isOpenedCart: boolean;
  handleOpenedCart: () => void;
}

export function Checkout({ isOpenedCart, handleOpenedCart }: ICheckout) {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  var total = cart.reduce(function(res,item) {
    return res + (item.product.price * item.quantity);
  }, 0);

  return (
    <SC.Checkout isOpenedCart={isOpenedCart}>
      <header>
        <span>Carrinho de compras</span>
        <button onClick={handleOpenedCart}>
          <Image src="/Close_cart.svg" width="60px" height="60px" />
        </button>
      </header>
      <main>
        {cart.map((item) => (
          <ItemCart key={item.product.id} item={item} />
        ))}
        <div>
          <span>Total:</span>
          <span>{new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}</span>
        </div>
      </main>
      <footer>
        <span>Finalizar Compra</span>
      </footer>
    </SC.Checkout>
  );
}
