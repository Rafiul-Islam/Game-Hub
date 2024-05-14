import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-ff4914e6.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
