import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      alignItems="center"
      backgroundColor="gray.50"
      justifyContent="center"
      padding={[4, 6]}
      width="100%"
    >
      <Image
        alt="worldtrip"
        src="logo.svg"
        width={[20, 40]}
      />
    </Flex>
  );
}
