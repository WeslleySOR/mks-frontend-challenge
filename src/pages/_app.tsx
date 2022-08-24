import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store()}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
