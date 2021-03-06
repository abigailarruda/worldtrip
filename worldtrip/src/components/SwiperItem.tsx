import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperItemProps {
  continent: string;
  description: string;
  image: string;
  url: string;
}

export function SwiperItem({
  continent,
  description,
  image,
  url,
}: SwiperItemProps) {
  return (
    <Link href={`/continent/${url}`} passHref>
      <Flex
        alignItems="center"
        backgroundImage={`linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('${image}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        height="400px"
        justifyContent="center"
        width="1120px"
      >
        <Heading
          as="h1"
          color="white"
          fontSize={["2xl", "3rem"]}
          fontWeight="bold"
          lineHeight={["2.25rem", "4.5rem"]}
          marginBottom={2}
          textAlign="center"
          width="100%"
        >
          {continent}
        </Heading>

        <Text
          color="gray.50"
          fontSize={["md", "lg"]}
          fontWeight="medium"
          textAlign="center"
        >
          {description}
        </Text>
      </Flex>
    </Link>
  );
}
