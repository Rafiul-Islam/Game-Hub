import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMoodSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack alignItems="center">
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text textTransform="capitalize" whiteSpace="nowrap">
          {colorMode} Mood
        </Text>
      </HStack>
    </>
  );
};

export default ColorMoodSwitch;
