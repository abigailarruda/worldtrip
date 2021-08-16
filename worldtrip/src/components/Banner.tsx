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
      paddingX={[4, 4, 8, 8]}
      width="100%"
    >
      <Flex
        alignItems="flex-start"
        height={[40, 96]}
        justifyContent={["flex-start", "space-between"]}
        margin="0 auto"
        maxWidth="1120px"
        width="100%"
      >
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          height={[40, 40, "100%", "21rem"]}
          justifyContent="center"
        >
          <Heading
            as="h1"
            color="white"
            fontSize={["2xl", "2rem"]}
            fontWeight="medium"
            lineHeight={["2.25rem", "3rem"]}
            marginBottom={2}
            textAlign={["center", "left"]}
            width="100%"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>

          <Text
            color="gray.50"
            fontSize={["md", "lg"]}
            fontWeight="normal"
            maxWidth={isWideVersion ? "32rem" : "100%"}
            textAlign={["center", "left"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        {isWideVersion && (
          <Flex alignItems="flex-end" height="100%" justifyContent="center">
            <Image alt="airplane" src="airplane.svg" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
