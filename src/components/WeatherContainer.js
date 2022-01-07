import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import WeatherNow from "./WeatherNow";
import WeekForecast from "./WeekForecast";
import "./weather.css";
import Searchbar from "./Searchbar";
import { useGeolocation } from "../useGeolocation";

const WeatherContainer = () => {
  const api = {
    key: "b7c216f898e3eea9fe6543e67e3443b7",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [ geolocation, setGeolocation ] = useState(false)

  const fetchWeather = (city) => {
    fetch(`${api.base}weather?id=${city}&units=metric&APPID=${api.key}`)

      .then((res) => res.json())
      .then((result) =>
        result.cod == 200 
        ? setWeather(result) 
        : console.log(result)
      )
      .catch((error) => console.log(error.message));
  };
  
  const fetchWeekForecast = (city) => {
    fetch(`${api.base}forecast?id=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) =>
        result.cod == 200
          ? setForecast(extractSingleRecordPerDay(result))
          : console.log(result)
      )
      .catch((error) => console.log(error.message));
  };
  
  const extractSingleRecordPerDay = (forecast) => {    
    let perDayFilter = forecast.list.filter(
      (value, index) => index === 0 || index % 8 === 0
    );
    return perDayFilter;
  };
  
  useGeolocation(api, extractSingleRecordPerDay, geolocation, setWeather)

  return (
    <VStack
      w="50%"
      className="glass"
      borderRadius={40}
      padding={10}
      spacing={4}
    >
      <Searchbar
        fetchWeather={fetchWeather}
        fetchWeekForecast={fetchWeekForecast}
        geolocation={geolocation}
        setGeolocation={setGeolocation}
      />
      {weather && <WeatherNow data={weather} />}
      {forecast && <WeekForecast data={forecast} />}
    </VStack>
  );
};

export default WeatherContainer;
