import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="xl" />;
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} charLimit={300} />
    </>
  );
};

export default GameDetails;
