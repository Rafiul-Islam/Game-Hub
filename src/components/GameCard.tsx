import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms } = game;

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image height="250px" objectFit="cover" src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <PlatformIconList platforms={parent_platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
