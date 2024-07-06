import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="xl" />;
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} charLimit={300} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetails;
