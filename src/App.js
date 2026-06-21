import './App.css';
import './utils/constants.css';
import GlobalFonts from './fonts/fonts';
import NavBar from './components/nav-bar/NavBar';
import Heading from './components/heading/Heading';
import Footer from './components/footer/Footer';
import Coaster from './components/coaster/Coaster';
import Projects from './components/projects/Projects';
import marianaImageOne from './assets/mariana-image-one.png';
import marianaImageTwo from './assets/mariana-image-two.png';
import star from './assets/star.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dumpert from './Dumpert';
import Menu from './components/heading/Menu';
import Spotify from './Spotify';
import HomePage from './HomePage';
import BlindDating from './BlindDating';
import ArtDetective from './ArtDetective';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dumpert" element={<Dumpert />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/blind-dating" element={<BlindDating />} />
        <Route path="/art-detective" element={<ArtDetective />} />
      </Routes>
    </Router>
  );
}

export default App;
