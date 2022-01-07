import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import WeatherNow from "./WeatherNow";
import WeekForecast from "./WeekForecast";
import "./weather.css";
import Searchbar from "./Searchbar";
import { useGeolocation } from "../useGeolocation";
import { useWeather } from "../useWeather";
import { useForecast } from "../useForecast";

const WeatherContainer = () => {
  const api = {
    key: "e9c3093e11a466030601670b5ad691ef",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [city, setCity] = useState();
  const [ geolocation, setGeolocation ] = useState(false)

  
  const extractSingleRecordPerDay = (forecast) => {    
    let perDayFilter = forecast.list.filter(
      (value, index) => index === 0 || index % 8 === 0
      );
      return perDayFilter;
    };
    
    useGeolocation(api, extractSingleRecordPerDay, geolocation, setWeather, setForecast)
    useWeather(api, city, setWeather)
    useForecast(api, city, setForecast, extractSingleRecordPerDay)


  return (
    <VStack
      w="50%"
      className="glass"
      borderRadius={40}
      padding={10}
      spacing={4}
    >
      <Searchbar
        setCity={setCity}
        geolocation={geolocation}
        setGeolocation={setGeolocation}
      />
      {weather && <WeatherNow data={weather} />}
      {forecast && <WeekForecast data={forecast} />}
    </VStack>
  );
};

export default WeatherContainer;
