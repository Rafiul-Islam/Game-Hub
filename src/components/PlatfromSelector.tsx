import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatfrom from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}

const PlatfromSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatfrom();

  const platform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

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
