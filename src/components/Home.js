import { Text, Link, Box, Stack, Center } from "@chakra-ui/react";
import Weather from "./WeatherContainer";

const Home = () => {
   
    return ( 
        <Center w='100%' height='95vh' backgroundColor='brand.900' borderBottom='1px solid white'>
            <Weather />
        </Center>
     );
}
 
export default Home;