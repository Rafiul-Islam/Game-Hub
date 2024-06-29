import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic, rating_top } =
    game;

  return (
    <Card shadow="md" _hover={{ opacity: 0.7 }}>
      <Image
        height="250px"
        objectFit="cover"
        src={getCroppedImageUrl(background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom="5px">
          <PlatformIconList platforms={parent_platforms} />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="xl">
          {name}
          <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
