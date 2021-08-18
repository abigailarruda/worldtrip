import {
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  Stack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useState, useEffect } from "react";

import { Info } from "react-feather";

import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";

import { api } from "../../services/api";

interface City {
  name: string;
  country: string;
  image: string;
  countryFlag: string;
}

interface Continent {
  name: string;
  url: string;
  image: string;
  description: string;
  quote: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfMostPopularCities: number;
  cities: City[];
}

export default function Continent() {
  const [continent, setContinent] = useState<Continent>();

  const { query } = useRouter();

  useEffect(() => {
    const { continent } = query;

    api.get(`/continents?url=${continent}`).then((response) => {
      setContinent(response.data[0]);
    });
  }, [query]);

  if (!continent) {
    return (
      <>
        <Head>
          <title>worldtrip</title>
        </Head>

        <Header />

        <Loading />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{continent?.name} | worldtrip</title>
      </Head>

      <Header hasBackButton />

      <Stack
        paddingX={[4, 4, 8, 0]}
        margin="0 auto"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        maxWidth="1120px"
        spacing={[12, 16]}
        width="100%"
      >
        <Flex
          alignItems={["center", "flex-end"]}
          justifyContent={["center", "flex-start"]}
          backgroundImage={`linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('${continent.image}')`}
          backgroundPosition="top"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width="100%"
          borderRadius="8px"
          padding={8}
          height={["160px", "400px"]}
        >
          <Heading
            as="h1"
            color="white"
            fontSize={["2xl", "5xl"]}
            fontWeight="bold"
            lineHeight={["2.25rem", "4.5rem"]}
          >
            {continent.name}
          </Heading>
        </Flex>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={12}
        >
          <Text
            textAlign="justify"
            fontSize={["md", "lg"]}
            lineHeight={["base", "1.6875rem"]}
          >
            {continent.description}
          </Text>

          <HStack spacing={12} alignItems="center" justifyContent="center">
            <Heading
              as="h2"
              color="yellow.500"
              display="flex"
              flexDirection="column"
              textAlign={["left", "center"]}
              alignItems={["flex-start", "center"]}
              justifyContent={["flex-start", "center"]}
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
            >
              {continent.numberOfCountries.toString().padStart(2, "0")}

              <Text
                as="span"
                color="gray.600"
                fontSize={["lg", "2xl"]}
                fontWeight={["normal", "semibold"]}
              >
                países
              </Text>
            </Heading>

            <Heading
              as="h2"
              color="yellow.500"
              display="flex"
              flexDirection="column"
              textAlign={["left", "center"]}
              alignItems={["flex-start", "center"]}
              justifyContent={["flex-start", "center"]}
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
            >
              {continent.numberOfLanguages.toString().padStart(2, "0")}

              <Text
                as="span"
                color="gray.600"
                fontSize={["lg", "2xl"]}
                fontWeight={["normal", "semibold"]}
              >
                línguas
              </Text>
            </Heading>

            <Heading
              as="h2"
              color="yellow.500"
              display="flex"
              flexDirection="column"
              textAlign={["left", "center"]}
              alignItems={["flex-start", "center"]}
              justifyContent={["flex-start", "center"]}
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
            >
              {continent.numberOfMostPopularCities.toString().padStart(2, "0")}

              <Text
                as="span"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="gray.600"
                fontSize={["lg", "2xl"]}
                fontWeight={["normal", "semibold"]}
              >
                cidades +100
                <Tooltip
                  placement="left"
                  backgroundColor="gray.600"
                  label="Cidades que este continente possui que estão entre as 100 cidades mais visitadas do mundo."
                >
                  <IconButton
                    variant="unstyled"
                    aria-label="Cidades +100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    icon={<Info size="1rem" color="#829099" />}
                  />
                </Tooltip>
              </Text>
            </Heading>
          </HStack>
        </Grid>

        <Box width="100%">
          <Heading
            as="h2"
            color="gray.600"
            textAlign="left"
            fontWeight="semibold"
            fontSize={["2xl", "2rem"]}
          >
            Cidades +100
          </Heading>
        </Box>

        <Grid
          width="100%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={12}
        >
          {continent.cities.map((city) => {
            return (
              <Box
                border="1px solid rgba(130, 140, 153, 0.3)"
                borderRadius="8px"
                key={city.name}
                overflow="hidden"
                width="100%"
              >
                <Image
                  alt={city.name}
                  objectFit="cover"
                  src={city.image}
                  width="100%"
                />

                <Flex padding={6} width="100%" justifyContent="space-between">
                  <Flex flexDirection="column">
                    <Heading
                      as="h5"
                      color="gray.600"
                      fontSize="xl"
                      fontWeight="semibold"
                      marginBottom={2}
                      textAlign="left"
                    >
                      {city.name}
                    </Heading>

                    <Text color="gray.500" fontSize="md" textAlign="left">
                      {city.country}
                    </Text>
                  </Flex>

                  <Image
                    src={city.countryFlag}
                    alt={city.country}
                    width="2rem"
                    height="2rem"
                  />
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Stack>

      <br />
      <br />
      <br />
    </>
  );
}
