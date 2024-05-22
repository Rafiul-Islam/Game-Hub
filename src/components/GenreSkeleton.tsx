import { HStack, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <HStack alignItems="center" paddingY="10px">
        <Skeleton height="32px" width="32px" />
        <Skeleton width="170px" height="10px" />
      </HStack>
    </>
  );
};

export default GenreSkeleton;
