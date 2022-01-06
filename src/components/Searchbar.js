import { HStack, Select, Text, VStack } from "@chakra-ui/react";

const Searchbar = ({ fetchWeather }) => {

  const cities = [
    {
      name:'London',
      id:   2643743
    },
    {
      name:'Rio de Janeiro',
      id:   3451190
    },
    {
      name:'New York',
      id:   5128581
    },
    {
      name:'Zambia',
      id:   895949
    },
    {
      name:'Alaska',
      id:   5879092
    },
  ]

  const handleChange = e => {
    let city = e.target.value
    fetchWeather(city)
  }

  return (
    <HStack w="100%" justify="space-between" paddingBottom={5}>
      <VStack>
        <Select
          placeholder="Choose a city"
          color="white"
          fontWeight={500}
          variant="unstyled"
          focusBorderColor="white"
          size="md"
          onChange={handleChange}
        >
         { cities.map((city) => <option value={city.id}>{city.name}</option>) }
        </Select>
        
      </VStack>
      <VStack>
        <HStack>
          <Text>icon</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Searchbar;
