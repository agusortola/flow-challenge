import { VStack} from "@chakra-ui/react";
import { useState } from 'react'
import WeatherNow from "./WeatherNow";
import WeatherWeek from "./WeatherWeek";
import "./weather.css"
import Searchbar from "./Searchbar";
const WeatherContainer = (  ) => {

  const api = {
    key: "b7c216f898e3eea9fe6543e67e3443b7",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    name: "Buenos Aires",
    main:{
      temp: '30',
      temp_min: '15',
      temp_max: '32',
      humidity: '60',

    },
    weather:[{
      main: 'Sunny',
      icon: 'X'
    }]
  });

  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            setCity('');
        })
        .catch(function(e) {
          console.log('The data could not be fetched: ', e.message);
        }); 
    }
  }

  return (
    <VStack
      w="50%"
      className="glass"
      borderRadius={40}
      padding={10}
      spacing={4}
    >
      <Searchbar city={city} setCity={setCity} search={search}/>
      <WeatherNow data={weather} />
      <WeatherWeek />
    </VStack>
  );
};

export default WeatherContainer;
