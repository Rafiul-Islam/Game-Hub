import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  charLimit: number;
}

const ExpandableText = ({ text, charLimit }: Props) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  if (!text) return null;
  const summary = text.substring(0, charLimit) + "...";

  if (text.length <= charLimit) return text;
  return (
    <>
      <Text mt={3}>
        {show ? text : summary}
        <Button
          ml={show ? 0 : 1}
          colorScheme="orange"
          size="xs"
          fontWeight="bold"
          onClick={handleToggle}
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
