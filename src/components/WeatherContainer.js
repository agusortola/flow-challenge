import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import WeatherNow from "./WeatherNow";
import WeekForecast from "./WeekForecast";
import "./weather.css";
import Searchbar from "./Searchbar";
import { get } from "../utils/restClient";
import ErrorModal from "../utils/ErrorModal";

const WeatherContainer = () => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const extractSingleRecordPerDay = (forecast) => {
    let perDayFilter = forecast.list.filter(
      (value, index) => index === 0 || index % 8 === 0
    );
    return perDayFilter;
  };

  function fetchGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let userLat = position.coords.latitude;
      let userLon = position.coords.longitude;
      get(`weather?lat=${userLat}&lon=${userLon}&units=metric`, setWeather, errorCallback);
      get(`forecast?lat=${userLat}&lon=${userLon}&units=metric`, (result) => setForecast(extractSingleRecordPerDay(result)), errorCallback);
    });
  }

  function onCityChange(city) {
    if (city !== undefined) {
      fetchWeather(city);
      fetchForecast(city);
    }
  }

  function fetchWeather(city) {
    get(`weather?id=${city}&units=metric`, setWeather, errorCallback);
  }

  function fetchForecast(city) {
    get(`forecast?id=${city}&units=metric`, (result) => setForecast(extractSingleRecordPerDay(result)), errorCallback);
  }

  function errorCallback(error) {
    console.log(error); // para debug
    setModalIsOpen(true)
  }

  useEffect(() => {
    fetchGeolocation();
  }, []);

  return (
    <VStack
      w={{ base: '90%', lg:"90%" , xl: '70%', '2xl':'60%' }}
      className="glass"
      borderRadius={40}
      padding={10}
      spacing={4}
    >
      <Searchbar
        onCityChange={onCityChange}
        fetchGeolocation={fetchGeolocation}
      />
      {weather && <WeatherNow data={weather} />}
      {forecast && <WeekForecast data={forecast} />}
      {modalIsOpen && <ErrorModal setModalIsOpen={setModalIsOpen} />}
    </VStack>
  );
};

export default WeatherContainer;