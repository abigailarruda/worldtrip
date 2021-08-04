import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      alignItems="flex-start"
      backgroundImage="url(banner.png)"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize={!isWideVersion ? "cover" : "auto"}
      height={[40, 96]}
      justifyContent={["flex-start", "space-between"]}
      paddingX={[4, 4, 8, 36]}
    >
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        height={[40, 40, "100%", "21rem"]}
        justifyContent="center"
      >
        <Heading
          as="h1"
          color="gray.50"
          fontSize={["xl", "4xl"]}
          fontWeight="medium"
          lineHeight={["1.875rem", "3.375rem"]}
          marginBottom={4}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>

        <Text
          color="gray.50"
          fontSize={["sm", "xl"]}
          fontWeight="normal"
          maxWidth={isWideVersion ? "32rem" : "100%"}
        >
          Chegou a hora de tirar do papel a viagem que você
          sempre sonhou.
        </Text>
      </Flex>

      {isWideVersion && (
        <Flex
          alignItems="flex-end"
          height="100%"
          justifyContent="center"
        >
          <Image alt="airplane" src="airplane.svg" />
        </Flex>
      )}
    </Flex>
  );
}
