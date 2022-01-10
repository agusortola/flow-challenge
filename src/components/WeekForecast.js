import { Stack, VStack, HStack, Text, StackDivider } from "@chakra-ui/react";
import moment from "moment";

const WeekForecast = ({ data }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      {data?.map((day, index) => {
        return (
          <Stack direction={{ base: "row", md: "column" }} key={index} bg="whiteAlpha.200" padding={5} spacing={2} borderRadius={10}>
            <Text color="white" fontWeight={400} textAlign='center'>{moment(day?.dt_txt).format('ddd')}</Text>
            <Stack direction={{ base: "column", md: "row" }}>
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
            </Stack>
            <HStack justify='center'>
              <Text fontSize={16} fontWeight={300} color="white">{day?.weather[0].description}</Text>
            </HStack>
            <Stack direction={{ base: "row", md: "row" }} divider={ <StackDivider />} justify='center'>
              <Text fontSize={20} fontWeight={300} color="white">
                {Math.round(day?.main?.temp_min)}&deg;
              </Text>
              <Text fontSize={20} fontWeight={500} color="white">
                {Math.round(day?.main?.temp_max)}&deg;
              </Text>
            </Stack>
            <Text>{day?.main?.description}</Text>
          </Stack >
        );
      })}
    </Stack>
  );
};

export default WeekForecast;
