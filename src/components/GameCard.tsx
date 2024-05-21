import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image
        height="250px"
        objectFit="cover"
        src={getCroppedImageUrl(background_image)}
      />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={parent_platforms} />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;