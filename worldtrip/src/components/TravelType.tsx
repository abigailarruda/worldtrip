import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelType() {
  return (
    <Flex
      alignItems="center"
      margin="0 auto"
      maxWidth="1120px"
      paddingX={[4, 4, 8, 0]}
      width="100%"
    >
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
        width="100%"
        justifyContent="center"
      >
        <GridItem>
          <Type icon="icons/cocktail.svg" name="lazer" />
        </GridItem>

        <GridItem>
          <Type icon="icons/surf.svg" name="praia" />
        </GridItem>

        <GridItem>
          <Type icon="icons/building.svg" name="moderno" />
        </GridItem>

        <GridItem>
          <Type icon="icons/museum.svg" name="clássico" />
        </GridItem>

        <GridItem colSpan={[2, 1]}>
          <Type icon="icons/earth.svg" name="e mais..." />
        </GridItem>
      </Grid>
    </Flex>
  );
}
