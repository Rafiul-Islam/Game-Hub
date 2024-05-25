import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import _ from "lodash";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: geners, isLoading, error } = useGenres();

  const skeletons = _.range(20);

  if (error) return null;
  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((s) => (
            <ListItem key={s}>
              <GenreSkeleton />
            </ListItem>
          ))}
      </List>
      <List>
        {geners.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
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
