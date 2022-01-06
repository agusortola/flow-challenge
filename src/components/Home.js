import { Center } from "@chakra-ui/react";
import WeatherContainer from "./WeatherContainer";

const Home = () => {
  const background = { background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" }
  return (
    <Center
      w="100vw"
      flexDirection="column"
      h="95vh"
      style={background}
    >
      <WeatherContainer />
    </Center>
  );
};

export default Home;
