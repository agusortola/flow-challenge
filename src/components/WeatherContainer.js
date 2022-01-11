import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import WeatherNow from "./WeatherNow";
import WeekForecast from "./WeekForecast";
import "./weather.css";
import Searchbar from "./Searchbar";
import { get } from "../utils/restClient";
import ErrorModal from "../utils/ErrorModal";
import moment from "moment";

const WeatherContainer = () => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const extractSingleRecordPerDay = (forecast) => {
    const today = convertToDateOnly(moment());
    const registeredDates = [today];
    const recordsOfNextFiveDays = [];

    forecast.list.forEach((record) => {
      const recordDate = convertToDateOnly(record.dt_txt);
      const condition = !registeredDates.some((date) => date === recordDate);
      if (condition) {
        recordsOfNextFiveDays.push(record);
        registeredDates.push(recordDate);
      }
    });

    return recordsOfNextFiveDays;
  };

  function convertToDateOnly(date) {
    let format = "YYYY-MM-DD";
    return moment(date).format(format);
  }

  function fetchGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let userLat = position.coords.latitude;
      let userLon = position.coords.longitude;
      fetchWeatherByCoordinates(userLat, userLon)
      fetchForecastByCoordinates(userLat, userLon)
    });
  }
  function fetchWeatherByCoordinates(userLat, userLon){
    get(`weather?lat=${userLat}&lon=${userLon}&units=metric`, setWeather, errorCallback);
    
  }
  
  function fetchForecastByCoordinates(userLat, userLon){
    get(`forecast?lat=${userLat}&lon=${userLon}&units=metric`, (result) => setForecast(extractSingleRecordPerDay(result)), errorCallback);
  }
  
  function onCityChange(city) {
    if (city !== undefined) {
      fetchWeatherByCity(city);
      fetchForecastByCity(city);
    }
  }

  function fetchWeatherByCity(city) {
    get(`weather?id=${city}&units=metric`, setWeather, errorCallback);
  }

  function fetchForecastByCity(city) {
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
      padding={8}
      spacing={2}
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