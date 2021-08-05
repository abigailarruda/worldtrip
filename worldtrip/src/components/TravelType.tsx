import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelType() {
  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent={["space-around", "space-between"]}
      marginY={[6, 20]}
      paddingX={[4, 4, 8, 36]}
    >
      <Type icon="icons/cocktail.svg" name="vida noturna" />

      <Type icon="icons/surf.svg" name="praia" />

      <Type icon="icons/building.svg" name="moderno" />

      <Type icon="icons/museum.svg" name="clássico" />

      <Type icon="icons/earth.svg" name="e mais..." />
    </Flex>
  );
}
