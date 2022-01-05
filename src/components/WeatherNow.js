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
            <Text fontSize={100} fontWeight={900} color="white">
            {data.weather[0].icon}
            </Text>
          </VStack>
          <VStack>
            <Text fontSize={120} fontWeight={900} color="white">
              {data.main.temp}&deg;
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize={15} fontWeight={900} color="white">
              Min: {data.main.temp_min}&deg;
            </Text>
            <Text fontSize={15} fontWeight={900} color="white">
              Max: {data.main.temp_max}&deg;
            </Text>
            <Text fontSize={15} fontWeight={900} color="white">
              humidity: {data.main.humidity}%
            </Text>
          </VStack>
        </HStack>
      </>
    );
  };

  export default WeatherNow;