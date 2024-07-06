import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container maxW="1500px" mt="30px">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
