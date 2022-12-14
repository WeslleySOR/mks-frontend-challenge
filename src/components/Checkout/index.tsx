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

  var total = cart.reduce(function (res, item) {
    return res + item.product.price * item.quantity;
  }, 0);

  return (
    <SC.Checkout isOpenedCart={isOpenedCart}>
      <SC.CheckoutHeader>
        <span>Carrinho de compras</span>
        <SC.CloseCheckoutButton onClick={handleOpenedCart}>
          <span>X</span>
        </SC.CloseCheckoutButton>
      </SC.CheckoutHeader>
      <SC.CheckoutMain>
        {cart.map((item) => (
          <ItemCart key={item.product.id} item={item} />
        ))}
      </SC.CheckoutMain>
      <SC.CheckoutFooter>
        <SC.CheckoutTotalPrice>
          <span>Total:</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </span>
        </SC.CheckoutTotalPrice>
        <SC.FinalizePurchaseButton>
          <span>Finalizar Compra</span>
        </SC.FinalizePurchaseButton>
      </SC.CheckoutFooter>
    </SC.Checkout>
  );
}
