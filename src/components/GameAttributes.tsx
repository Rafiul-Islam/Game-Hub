import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinationItems from "./DefinationItems";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItems term="Platforms">
        {game.parent_platforms.map(({ platform: { id, name } }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinationItems>
      <DefinationItems term="Genres">
        {game.genres.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems term="Publishers">
        {game.publishers.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinationItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
