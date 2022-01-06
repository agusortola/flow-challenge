import logo from "../logo.svg";
import "./Footer.css";
import { Text, Link, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box>
      <header className="Footer-content">
        <Text fontWeight={500}>Made with</Text>
        <img src={logo} className="App-logo" alt="logo" />
        <Text fontWeight={500}>by</Text>
        <Link
          className="Footer-link"
          color="brand.500"
          fontWeight={500}
          href="https://github.com/agusortola/flow-challenge"
          isExternal
        >
          agusortola
        </Link>
      </header>
    </Box>
  );
}

export default Footer;
