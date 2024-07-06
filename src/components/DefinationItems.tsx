import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinationItems = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dt" color="gray.600" fontWeight="bold" fontSize="xl">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinationItems;
