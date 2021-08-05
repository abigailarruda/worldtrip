import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <>
      <Head>
        <title>home | worldtrip</title>
      </Head>

      <Banner />

      <TravelType />
    </>
  );
}
