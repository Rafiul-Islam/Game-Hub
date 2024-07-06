import { Container, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Container maxW="1500px" mt="30px">
        <Heading fontSize="5xl">Opps</Heading>
        <Text fontSize="xl">
          {isRouteErrorResponse(error)
            ? "The page does not exits."
            : "Sorry, an unexpacted error occure."}
        </Text>
      </Container>
    </>
  );
};

export default ErrorPage;
