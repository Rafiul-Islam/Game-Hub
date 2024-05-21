import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card pb="40px">
      <Skeleton width="100%" height="250px" />
      <CardBody>
        <SkeletonText height={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
