import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Product";

import * as SC from "../styles/index";

export default function Home() {
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
        <Product product={{
          "id": 1,
          "name": "iPhone X 128 GB",
          "brand": "Apple",
          "description": "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
          "price": 2000.1
        }}/>
      </SC.Main>
      <Footer />
    </SC.Container>
  );
}
