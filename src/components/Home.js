import { Center } from "@chakra-ui/react";
import Weather from "./WeatherContainer";

const Home = () => {
  return (
    <Center
      w="100vw"
      flexDirection="column"
      h="95vh"
      backgroundColor="brand.900"
      borderBottom="1px solid white"
    >
      <Weather />
    </Center>
  );
};

export default Home;
