import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Product";

import { ApiResponse } from '../types/types'

import * as SC from "../styles/index";
import { api } from "../services/instance";

interface HomeProps {
  apiResponse: ApiResponse;
}

export default function Home({apiResponse}: HomeProps) {
  return (
    <SC.Container>
      <Head>
        <title>MKS Sistemas</title>
        <meta
          name="description"
          content="Next-app website developed to challenge"
        />
      </Head>
      <Header />
      <SC.Main>
        {apiResponse.products.map(product => {
          return (
            <Product key={product.id} product={product}/>
          )
        })}
      </SC.Main>
      <Footer />
    </SC.Container>
  );
}

export async function getStaticProps() {
  const apiResponse = await api.get<ApiResponse>('?page=1&rows=5&sortBy=id&orderBy=DESC')
    .then((response) => {
      return response.data
    });
  return {
    props: {
      apiResponse,
    },
  };
}
