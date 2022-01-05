import logo from './logo.svg';
import './Footer.css';
import { Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <div className="Footer">
      <header className="Footer-content">
        <Text fontWeight="bold">Made with</Text>
        <img src={logo} className="App-logo" alt="logo" />
        <Text fontWeight="bold">by</Text>
        <Link
          className="Footer-link"
          fontWeight="bold"
          href="https://github.com/agusortola/flow-challenge"
        >
          agusortola
        </Link>
      </header>
    </div>
  );
}

export default Footer;
