import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";

const GameHeading = () => {
  const { genreId, platformId } = useGameStore((s) => ({
    genreId: s.gameQuery.genreId,
    platformId: s.gameQuery.platformId,
  }));

  const selectedGenre = useGenre(genreId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
