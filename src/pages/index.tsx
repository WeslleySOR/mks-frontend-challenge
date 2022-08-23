import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { api } from "../services/instance";

import { useSelector } from "react-redux";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Product";

import { ApiResponse } from "../types/types";

import * as SC from "../styles/index";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

interface HomeProps {
  apiResponse: ApiResponse;
}

export default function Home({ apiResponse }: HomeProps) {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  const handleOpenedCart = () => {
    setIsOpenedCart(!isOpenedCart);
  };

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta
          name="description"
          content="Next-app website developed to challenge"
        />
      </Head>
      <SC.Container>
        <SC.Content>
          <Header handleOpenedCard={handleOpenedCart} />
          <SC.Main>
            {apiResponse.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </SC.Main>
          <Footer />
        </SC.Content>
        <SC.Cart isOpenedCart={isOpenedCart}>
          <header>
            <span>Carrinho de compras</span>
            <button onClick={handleOpenedCart}>
              <Image src="/Close_cart.svg" width="40px" height="40px" />
            </button>
          </header>
          <main>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.product.id}>
                    <td>{item.product.name}</td>
                    <td>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.product.price)}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(
                        item.product.price * item.quantity
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
          <footer>
            <span>Finalizar Compra</span>
          </footer>
        </SC.Cart>
      </SC.Container>
    </>
  );
}

export async function getStaticProps() {
  const apiResponse = await api
    .get<ApiResponse>("?page=1&rows=20&sortBy=id&orderBy=ASC")
    .then((response) => {
      return response.data;
    });
  return {
    props: {
      apiResponse,
    },
  };
}
