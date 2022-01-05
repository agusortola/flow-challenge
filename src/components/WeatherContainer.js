import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import WeatherNow from "./WeatherNow";
import WeatherWeek from "./WeatherWeek";

const WeatherContainer = ( ) => {
  const dummyData = {
    header: "Right now in",
    city: "Buenos Aires",
    temperature: "37°",
    status: "Sunny and clear sky",
    details: {
      vel: "3.2 m/s",
      mm: "750 mm Hg",
      hum: "61%",
    },
  };

  const api = {
    key: "b7c216f898e3eea9fe6543e67e3443b7",
    base: "https://openweathermap.org/data/2.5/",
  };


  return (
    <VStack
      w="50%"
      h="600px"
      bg="brand.100"
      borderRadius={20}
      padding={10}
      spacing={2}
    >
      <WeatherNow data={dummyData} />
      <WeatherWeek />
    </VStack>
  );
};

export default WeatherContainer;
