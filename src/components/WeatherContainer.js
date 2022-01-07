import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import WeatherNow from "./WeatherNow";
import WeekForecast from "./WeekForecast";
import "./weather.css";
import Searchbar from "./Searchbar";
import { geolocated } from "react-geolocated";

const WeatherContainer = () => {
  const api = {
    key: "b7c216f898e3eea9fe6543e67e3443b7",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  const fetchWeather = (city) => {
    fetch(`${api.base}weather?id=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) =>
        result.cod == 200 ? setWeather(result) : console.log(result)
      )
      .catch((error) => console.log(error.message));
  };

  const fetchWeekForecast = (city) => {
    fetch(`${api.base}forecast?id=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        result.cod == 200
          ? extractSingleRecordPerDay(result)
          : console.log(result).catch((error) => console.log(error.message));
      });
  };

  const extractSingleRecordPerDay = (forecast) => {
    let fiveDaysFilter = forecast.list.filter(
      (value, index) => index === 0 || index % 8 === 0
    );
    setForecast(fiveDaysFilter);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let userLat = position.coords.latitude;
      let userLon = position.coords.longitude;
      fetch(
        `${api.base}weather?lat=${userLat}&lon=${userLon}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) =>
          result.cod == 200 ? setWeather(result) : console.log(result)
        )
        .catch((error) => console.log(error.message));
      console.log(position.coords.latitude, position.coords.longitude);

      fetch(
        `${api.base}forecast?lat=${userLat}&lon=${userLon}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          result.cod == 200
            ? extractSingleRecordPerDay(result)
            : console.log(result).catch((error) => console.log(error.message));
        });
    });
  }, []);
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
      />
      {weather && <WeatherNow data={weather} />}
      {forecast && <WeekForecast data={forecast} />}
    </VStack>
  );
};

export default WeatherContainer;
