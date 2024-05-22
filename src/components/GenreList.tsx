import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import _ from "lodash";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
        {geners.map(({ id, name, image_background }) => (
          <ListItem key={id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(image_background)}
              />
              <Text fontSize="lg">{name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
