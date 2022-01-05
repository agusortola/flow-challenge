import { VStack, HStack, Box } from "@chakra-ui/react";

const WeatherWeek = () => {
    return (
      <HStack>
        <VStack>
          <Box bg="whiteAlpha.200" h={40} w={40} borderRadius={10}></Box>
        </VStack>
        <VStack>
          <Box bg="whiteAlpha.200" h={40} w={40} borderRadius={10}></Box>
        </VStack>
        <VStack>
          <Box bg="whiteAlpha.200" h={40} w={40} borderRadius={10}></Box>
        </VStack>
        <VStack>
          <Box bg="whiteAlpha.200" h={40} w={40} borderRadius={10}></Box>
        </VStack>
        <VStack>
          <Box bg="whiteAlpha.200" h={40} w={40} borderRadius={10}></Box>
        </VStack>
      </HStack>
    );
  };
  
  export default WeatherWeek;