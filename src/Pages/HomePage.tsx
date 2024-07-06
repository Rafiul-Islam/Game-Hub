import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatfromSelector from "../components/PlatfromSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <main>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "260px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box mx="10px" mt="15px">
            <GameHeading />
            <HStack spacing={4} my={5}>
              <PlatfromSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </main>
  );
};

export default HomePage;
