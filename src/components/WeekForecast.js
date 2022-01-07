import { VStack, HStack, Text, StackDivider } from "@chakra-ui/react";

const WeekForecast = ({ data }) => {
  return (
    <HStack>
      {data.map((day, index) => {
        return (
          <VStack key={index} bg="whiteAlpha.200" h={40} w={40} padding={5} spacing={2} borderRadius={10}>
            <HStack>
              <img
                className="Forecast__weather-icon"
                src={
                  "https://openweathermap.org/img/wn/" +
                  day.weather[0].icon +
                  ".png"
                }
                alt={day.weather[0].icon}
              />
              <Text fontSize={30} fontWeight={700} color="white">
                {Math.round(day?.main?.temp)}&deg;
              </Text>
            </HStack>
            <HStack>
              <Text fontSize={16} fontWeight={300} color="white">{day?.weather[0].description}</Text>
            </HStack>
            <HStack divider={<StackDivider />}>
              <Text fontSize={20} fontWeight={300} color="white">
                {Math.round(day?.main?.temp_min)}&deg;
              </Text>
              <Text fontSize={20} fontWeight={500} color="white">
                {Math.round(day?.main?.temp_max)}&deg;
              </Text>
            </HStack>
            <Text>{day?.main?.description}</Text>
          </VStack>
        );
      })}
    </HStack>
  );
};

export default WeekForecast;
