import { Stack, VStack, Text, HStack, StackDivider } from "@chakra-ui/react";

const WeatherNow = ({ data }) => {
  return (
    <>
      <HStack alignItems="center">
        <VStack>
          <Text fontSize={16} fontWeight={500} color="white">
            Right now in
          </Text>
          <Text fontSize={30} fontWeight={700} color="white">
            {data.name}
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <Text fontSize={18} fontWeight="bold" color="white">
          {data.weather.main}
        </Text>
      </HStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        spacing={14}
      >
        <VStack>
          <img
            className="Forecast__weather-icon"
            width="80"
            height="80"
            src={
              "https://openweathermap.org/img/wn/" +
              data.weather[0].icon +
              ".png"
            }
            alt={data.weather[0].icon}
          />
          <Text fontSize={20} fontWeight={500} color="white">
            {data.weather[0].description}
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={{ base: 90, lg: 130 }} fontWeight={900} color="white">
            {Math.round(data.main.temp)}&deg;
          </Text>
        </VStack>
        <VStack align="flex-start" divider={<StackDivider />}>
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
      </Stack>
    </>
  );
};

export default WeatherNow;
