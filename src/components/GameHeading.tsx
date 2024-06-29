import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatfrom from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { platformId, genreId } }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatfrom();

  const selectedGenre = genres?.results.find((item) => item.id === genreId);
  const selectedPlatform = platforms?.results.find(
    (item) => item.id === platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
