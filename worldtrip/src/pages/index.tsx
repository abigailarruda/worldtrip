import Head from "next/head";

import { Divider, Flex, Heading, Stack } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <>
      <Head>
        <title>home | worldtrip</title>
      </Head>

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
      </Stack>

      <br />
    </>
  );
}
