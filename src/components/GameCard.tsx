import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const {
    name,
    background_image,
    parent_platforms,
    metacritic,
    rating_top,
    slug,
  } = game;

  return (
    <Card shadow="md">
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
          <Link to={`/games/${slug}`}>{name}</Link>
          <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
