import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import _ from "lodash";
import { Fragment } from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const pageSize = 10;
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames({ gameQuery, pageSize });
  const skeletons = _.range(8);

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((sl) => (
            <GameCardContainer key={sl}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
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
      {isFetchingNextPage && <Spinner size="xl" />}
      <Button ml="10px" marginBottom="30px" onClick={() => fetchNextPage()}>
        Load More....
      </Button>
    </>
  );
};

export default GameGrid;
