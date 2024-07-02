import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatfromSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <main>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "260px 1fr",
        }}
      >
        <GridItem
          area="nav"
          bgColor={colorMode === "dark" ? "gray.800" : "white"}
        >
          <Navbar />
        </GridItem>
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

export default App;
