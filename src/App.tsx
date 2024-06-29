import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatfromSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          sx={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
          }}
          bgColor={colorMode === "dark" ? "gray.800" : "white"}
        >
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genreId })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box mx="10px" mt="15px">
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={4} my={5}>
              <PlatfromSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
              />
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </main>
  );
};

export default App;
