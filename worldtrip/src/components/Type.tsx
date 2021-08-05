import {
  Flex,
  Text,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

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
        <Image
          alt={name}
          height="85px"
          marginBottom={6}
          src={icon}
          width="85px"
        />
      )}

      <Text
        alignItems="center"
        display="flex"
        fontSize="2xl"
        fontWeight="semibold"
        justifyContent="center"
      >
        {!isWideVersion && (
          <Text color="yellow.500" fontSize="4xl" mr="2">
            •
          </Text>
        )}
        {name}
      </Text>
    </Flex>
  );
}
