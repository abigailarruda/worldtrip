import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { Header } from "../components/Header";

import "../../node_modules/swiper/swiper.scss";
import "../../node_modules/swiper/components/navigation/navigation.scss";
import "../../node_modules/swiper/components/pagination/pagination.scss";

import "../styles/swiper.scss";
import "../styles/scrollbar.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
