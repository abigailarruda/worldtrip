import { Flex, Image, IconButton } from "@chakra-ui/react";
import Link from "next/link";

import { ChevronLeft } from "react-feather";

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton = false }: HeaderProps) {
  return (
    <Flex
      alignItems="center"
      backgroundColor="white"
      justifyContent="center"
      padding={[4, 6]}
      width="100%"
      maxWidth="1120px"
      margin="0 auto"
      marginBottom={4}
    >
      {hasBackButton && (
        <Link href="/" passHref>
          <IconButton
            marginRight="auto"
            variant="unstyled"
            aria-label="Cidades +100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            icon={<ChevronLeft size="1.5rem" color="#0D3C5C" />}
          />
        </Link>
      )}

      <Image
        alt="worldtrip"
        src="/logo.svg"
        width={[24, 40]}
        marginRight="auto"
        marginLeft={hasBackButton ? "" : "auto"}
      />
    </Flex>
  );
}
