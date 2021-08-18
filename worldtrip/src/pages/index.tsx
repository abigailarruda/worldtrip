import Head from "next/head";

import { Divider, Heading, Stack } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { TravelType } from "../components/TravelType";
import { Swiper } from "../components/Swiper";
import { Header } from "../components/Header";

import { useEffect, useState } from "react";

import { api } from "../services/api";

interface Continent {
  name: string;
  quote: string;
  image: string;
  url: string;
}

export default function Home() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get("/continents").then((response) => {
      setContinents(response.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>home | worldtrip</title>
      </Head>

      <Header />

      <Stack
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        spacing={[12, 16]}
      >
        <Banner />

        <TravelType />

        <Divider
          borderColor="gray.600"
          borderWidth={["1px", "2px"]}
          width={["64px", "80px"]}
        />

        <Heading
          as="h2"
          fontSize={["2xl", "2rem"]}
          fontWeight="medium"
          lineHeight={["2.25rem", "3rem"]}
          textAlign="center"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <Swiper continents={continents} />

        <br />
      </Stack>

      <br />
    </>
  );
}
