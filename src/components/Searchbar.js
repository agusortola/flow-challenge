import { HStack, Select, Text, VStack } from "@chakra-ui/react";
import "./searchbar.css"

const Searchbar = ({ fetchWeather, fetchWeekForecast }) => {

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
    fetchWeekForecast(city)
  }

  return (
    <HStack w="100%" justify="space-between" paddingBottom={5}>
      <VStack fontWeight={500}>
        <select
        
          id="select"
          placeholder="Choose a city"
          color="white"
          onChange={handleChange}
        >
         { cities.map((city) => <option key={city.id} value={city.id} id="option" style={{background:"#86cced"}}>{city.name}</option>) }
        </select>
        
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
