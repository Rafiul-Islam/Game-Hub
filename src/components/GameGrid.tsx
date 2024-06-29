import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import _ from "lodash";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = _.range(8);

  const gameCardLoader = (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} mt="10px">
      {skeletons.map((sl) => (
        <GameCardContainer key={sl}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );

  const fetchdGameCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchdGameCount}
        hasMore={!!hasNextPage}
        loader={gameCardLoader}
        next={() => fetchNextPage()}
        style={{ overflow: "hidden" }}
      >
        {isLoading && gameCardLoader}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {games?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
