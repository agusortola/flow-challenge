import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import WeatherNow from "./WeatherNow";
import WeatherWeek from "./WeatherWeek";
import { useState } from "react";

const WeatherContainer = () => {

  const api = {
    key: "b7c216f898e3eea9fe6543e67e3443b7",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    name: "Buenos Aires",
    main:{
      temp: '30°',
      temp_min: '15°',
      temp_max: '32°',
      humidity: '60',

    },
    weather:[{
      main: 'Sunny',
      icon: 'X'
    }]
  });

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  return (
    <VStack
      w="50%"
      h="600px"
      bg="brand.100"
      borderRadius={20}
      padding={10}
      spacing={2}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <WeatherNow data={weather} />
      <WeatherWeek />
    </VStack>
  );
};

export default WeatherContainer;
