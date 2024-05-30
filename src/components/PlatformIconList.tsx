import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatform";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap = new Map([
    ["pc", FaWindows],
    ["playstation", FaPlaystation],
    ["xbox", FaXbox],
    ["mac", FaApple],
    ["nintendo", SiNintendo],
    ["linux", FaLinux],
    ["android", FaAndroid],
    ["ios", MdPhoneIphone],
    ["web", BsGlobe],
  ]);

  return (
    <HStack marginY="10px">
      {platforms.map(({ platform: { id, slug } }) => (
        <Icon key={id} as={IconMap.get(slug)} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
