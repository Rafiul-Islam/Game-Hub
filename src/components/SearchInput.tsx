import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";

const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const onSearch = useGameStore((s) => s.onSearch);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInputRef.current) {
      onSearch(searchInputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInputRef}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
          type="search"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
