import Head from "next/head";
import { useState } from "react";

import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

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

  const renderProducts = () => {
    return (
      apiResponse.products.map((product) => 
        <Product key={product.id} product={product} />
      )
    )
  }

  const renderSkeletonProducts = () => {
    return (
      <>
        <Skeleton h="344px" w="250px">
          <Product
            product={{
              id: 1,
              name: "Iphone 11 128 GB",
              brand: "Apple",
              description:
                "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
              price: 5000.0,
              createdAt: "2022-08-21T19:30:29.567Z",
              updatedAt: "2022-08-21T19:30:29.567Z",
            }}
          />
        </Skeleton>
        <Skeleton h="344px" w="250px">
          <Product
            product={{
              id: 1,
              name: "Iphone 11 128 GB",
              brand: "Apple",
              description:
                "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
              price: 5000.0,
              createdAt: "2022-08-21T19:30:29.567Z",
              updatedAt: "2022-08-21T19:30:29.567Z",
            }}
          />
        </Skeleton>
        <Skeleton h="344px" w="250px">
          <Product
            product={{
              id: 1,
              name: "Iphone 11 128 GB",
              brand: "Apple",
              description:
                "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
              price: 5000.0,
              createdAt: "2022-08-21T19:30:29.567Z",
              updatedAt: "2022-08-21T19:30:29.567Z",
            }}
          />
        </Skeleton>
        <Skeleton h="344px" w="250px">
          <Product
            product={{
              id: 1,
              name: "Iphone 11 128 GB",
              brand: "Apple",
              description:
                "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
              price: 5000.0,
              createdAt: "2022-08-21T19:30:29.567Z",
              updatedAt: "2022-08-21T19:30:29.567Z",
            }}
          />
        </Skeleton>
        <Skeleton h="344px" w="250px">
          <Product
            product={{
              id: 1,
              name: "Iphone 11 128 GB",
              brand: "Apple",
              description:
                "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
              price: 5000.0,
              createdAt: "2022-08-21T19:30:29.567Z",
              updatedAt: "2022-08-21T19:30:29.567Z",
            }}
          />
        </Skeleton>
      </>
    );
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
        <Header handleOpenedCard={handleOpenedCart} />
        <SC.Main>          
          {apiResponse.count <= 0 ? renderSkeletonProducts() : renderProducts()}
        </SC.Main>
        <Footer />
        <Checkout
          isOpenedCart={isOpenedCart}
          handleOpenedCart={handleOpenedCart}
        />
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
