import './utils/constants.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dumpert from './Dumpert';
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
