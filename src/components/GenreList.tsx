import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import _ from "lodash";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameStore from "../store";

const GenreList = () => {
  const { data: geners, isLoading, error } = useGenres();
  const { genreId, onSelectGenre } = useGameStore((s) => ({
    genreId: s.gameQuery.genreId,
    onSelectGenre: s.onSelectGenre,
  }));

  const skeletons = _.range(20);

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb="15px">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((s) => (
            <ListItem key={s}>
              <GenreSkeleton />
            </ListItem>
          ))}
      </List>
      <List>
        {geners?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
