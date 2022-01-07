import { useState } from 'react';
import { HStack, Select, Text, VStack, Button} from "@chakra-ui/react";
import "./searchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({ fetchWeather, fetchWeekForecast, setGeolocation, geolocation }) => {

  const [placeholder, setPlaceholder ] = useState('Choose a city')
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
    setPlaceholder('Choose a city')
  
  }

  const handleClick = () => {
    setGeolocation(!geolocation)
    setPlaceholder('My location')
  }

  return (
    <HStack w="100%" justify="space-between" paddingBottom={5}>
      <VStack fontWeight={500}>
        <select
          id="select"
          color="white"
          onChange={handleChange}
        >
          <option value="">{placeholder}</option>
         { cities.map((city) => <option key={city.id} value={city.id} id="option" >{city.name}</option>) }
        </select>
        
      </VStack>
      <VStack>
        <HStack>
          <Button variant='unstyled' onClick={handleClick}>
            <FontAwesomeIcon icon={faLocationArrow} color='white' />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Searchbar;
