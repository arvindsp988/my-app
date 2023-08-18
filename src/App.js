 import './App.css';
import Navbar from './components/Navbar.js';
import LandingPageBlock1 from './components/LandingPageBlock1';
import Header from './components/Header.js';
import { Flex } from '@chakra-ui/react';
function App() {
  return (
    <div class="App">
      <container>
        <Flex>
          <Header/>
          <Navbar/>
          <LandingPageBlock1/>
        </Flex> 
      </container>
    </div>
  );
}

export default App;
