import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo-ff4914e6.webp";
import ColorMoodSwitch from "./ColorMoodSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorMoodSwitch />
    </HStack>
  );
};

export default Navbar;
