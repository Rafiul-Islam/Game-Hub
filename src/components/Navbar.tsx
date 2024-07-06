import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo-ff4914e6.webp";
import ColorMoodSwitch from "./ColorMoodSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="65px" objectFit="contain" />
      </Link>
      <SearchInput />
      <ColorMoodSwitch />
    </HStack>
  );
};

export default Navbar;
