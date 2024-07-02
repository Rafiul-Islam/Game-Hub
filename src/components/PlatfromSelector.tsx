import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatfroms from "../hooks/usePlatforms";
import useGameStore from "../store";

const PlatfromSelector = () => {
  const { data: platforms, error } = usePlatfroms();
  const { platformId, onSelectPlatform } = useGameStore((s) => ({
    platformId: s.gameQuery.platformId,
    onSelectPlatform: s.onSelectPlatform,
  }));

  const platform = usePlatform(platformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
