import { Flex, Text, Image, Stack, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  name: string;
}

export function Type({ icon, name }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      alignItems="center"
      flexDirection={["row", "column"]}
      justifyContent="center"
    >
      {isWideVersion && (
        <Image alt={name} height={20} marginBottom={6} src={icon} width={20} />
      )}

      <Text
        alignItems="center"
        display="flex"
        fontSize={["md", "2xl"]}
        fontWeight="semibold"
        justifyContent="center"
      >
        {!isWideVersion && (
          <Text as="span" color="yellow.500" fontSize={["2xl", "5xl"]} mr="2">
            •
          </Text>
        )}
        {name}
      </Text>
    </Flex>
  );
}
