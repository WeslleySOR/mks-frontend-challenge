import Head from "next/head";
import { useState } from "react";
import { api } from "../services/instance";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { Checkout } from "../components/Checkout";

import { ApiResponse } from "../types/types";

import * as SC from "../styles/index";

interface HomeProps {
  apiResponse: ApiResponse;
}

export default function Home({ apiResponse }: HomeProps) {
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
        <Checkout isOpenedCart={isOpenedCart} handleOpenedCart={handleOpenedCart}/>
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
