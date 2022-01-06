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
  
  const fetchWeather = city => {
      fetch(`${api.base}weather?id=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => result.cod == 200 ? setWeather(result) : console.log(result))
        .catch(error => console.log( error.message));
  }

  //TODO fetch week forecast data
  // const fetchWeekForecast = () => {
  //   fetch(`${api.base}forecast?q=${city}&APPID=${api.key}`)
  //   .then(res => res.json())
  // }
  // data.filter((value, index) => index == 0 || index % 8 == 0)

  return (
    <VStack
      w="50%"
      className="glass"
      borderRadius={40}
      padding={10}
      spacing={4}
    >
      <Searchbar fetchWeather={fetchWeather}/>
      <WeatherNow data={weather} />
      <WeatherWeek />
    </VStack>
  );
};

export default WeatherContainer;
