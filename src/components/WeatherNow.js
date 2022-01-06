import { VStack, Text, HStack } from "@chakra-ui/react";

const WeatherNow = ({ data }) => {

    return (
      <>
        <HStack>
          <Text fontSize={16} fontWeight={500} color="white">
            Right now in
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={30} fontWeight="bold" color="white">
            {data.name}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={18} fontWeight="bold" color="white">
            {data.weather.main}
          </Text>
        </HStack>
        <HStack spacing={20}>
          <VStack>
          <img
                className="Forecast__weather-icon"
                width="100" height="100"
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  ".png"
                }
                alt={data.weather[0].icon}
              />
            {/* <Text fontSize={60} fontWeight={900} color="white">
            {data.weather[0].icon}
            </Text> */}
            <Text fontSize={20} fontWeight={900} color="white">
            {data.weather[0].description}
            </Text>
          </VStack>
          <VStack>
            <Text fontSize={110} fontWeight={900} color="white">
              {Math.round(data.main.temp)}&deg;
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize={15} fontWeight={500} color="white">
              Min: {Math.round(data.main.temp_min)}&deg;
            </Text>
            <Text fontSize={15} fontWeight={500} color="white">
              Max: {Math.round(data.main.temp_max)}&deg;
            </Text>
            <Text fontSize={15} fontWeight={500} color="white">
              humidity: {data.main.humidity}%
            </Text>
          </VStack>
        </HStack>
      </>
    );
  };

  export default WeatherNow;