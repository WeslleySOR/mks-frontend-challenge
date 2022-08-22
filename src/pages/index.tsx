import Head from "next/head";
import { Product } from "../components/Product";

import * as SC from '../styles/index'

export default function Home() {
  return (
    <SC.Container>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="Next-app website developed to challenge" />
      </Head>
      <SC.Main>
        <Product/>
        <Product/>
        <Product/>
      </SC.Main>
    </SC.Container>
  );
}
