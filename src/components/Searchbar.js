import { HStack, Input, Text, VStack } from "@chakra-ui/react";

const Searchbar = ( {city, setCity, search} ) => {

  return (
    <HStack w="100%" justify="space-between" paddingBottom={5}>
      <VStack>
        <Input
          variant="flushed"
          color="white"
          width="100%"
          alignSelf="start"
          marginLeft="2%"
          placeholder="Search a city..."
          focusBorderColor="white"
          _placeholder={{ color: "white" }}
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </VStack>
      <VStack>
          <HStack>
          <Text>icon</Text>
          <Text>icon</Text>
          </HStack>
      </VStack>
    </HStack>
  );
};

export default Searchbar;
