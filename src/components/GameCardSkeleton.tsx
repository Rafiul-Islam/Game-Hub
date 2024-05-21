import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" pb="40px" minWidth="350px">
      <Skeleton width="100%" height="250px" />
      <CardBody>
        <SkeletonText height={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
