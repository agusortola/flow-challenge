import { VStack, Text, HStack } from "@chakra-ui/react";

const WeatherNow = ({ data }) => {
    
    return (
      <>
        <HStack>
          <Text fontSize={16} fontWeight={500} color="white">
            {data.header}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={30} fontWeight="bold" color="white">
            {data.city}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={18} fontWeight="bold" color="white">
            {data.status}
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
              {data.temperature}
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize={15} fontWeight={900} color="white">
              velocity: {data.details.vel}
            </Text>
            <Text fontSize={15} fontWeight={900} color="white">
              mm: {data.details.mm}
            </Text>
            <Text fontSize={15} fontWeight={900} color="white">
              humedity: {data.details.hum}
            </Text>
          </VStack>
        </HStack>
      </>
    );
  };

  export default WeatherNow;