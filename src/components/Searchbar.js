import { HStack, VStack, Button } from "@chakra-ui/react";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { cities } from "../utils/cities";

const Searchbar = ({ onCityChange, fetchGeolocation }) => {

  const handleChange = (e) => {
    let city = e.target.value;
    onCityChange(city);
  };

  return (
    <HStack w="100%" justify="space-between" paddingBottom={5}>
      <VStack fontWeight={500}>
        <select id="select" color="white" onChange={handleChange}>
          <option value="" selected hidden color="white">Choose a city</option>
          {cities?.map((city) => (
            <option key={city.id} value={city.id} id="option">
              {city.name}
            </option>
          ))}
        </select>
      </VStack>
      <VStack>
        <HStack>
          <Button variant="unstyled" onClick={fetchGeolocation}>
            <FontAwesomeIcon icon={faLocationArrow} color="white" />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Searchbar;
