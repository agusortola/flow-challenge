import { VStack, Text, HStack } from "@chakra-ui/react";

const WeatherContainer = () => {
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

  const WeatherNow = () => {
    return (
      <>
        <HStack>
          <Text fontSize={20} fontWeight={500} color="white">
            {dummyData.header}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={40} fontWeight="bold" color="white">
            {dummyData.city}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={20} fontWeight="bold" color="white">
            {dummyData.status}
          </Text>
        </HStack>
        <HStack spacing={20}>
        <VStack>
          <Text fontSize={100} fontWeight={900} color="white">
            X
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={120} fontWeight={900} color="white">
            {dummyData.temperature}
          </Text>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize={15} fontWeight={900} color="white">
            {dummyData.details.vel}
          </Text>
          <Text fontSize={15} fontWeight={900} color="white">
            {dummyData.details.mm}
          </Text>
          <Text fontSize={15} fontWeight={900} color="white">
            {dummyData.details.hum}
          </Text>
        </VStack>
      </HStack>
      </>
    );
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
      <WeatherNow />
    </VStack>
  );
};

export default WeatherContainer;
