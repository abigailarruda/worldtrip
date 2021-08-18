import { Flex, Box, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDir="column"
    >
      <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.100"
          color="yellow.500"
          size="xl"
        />
      </Box>
    </Flex>
  );
}
