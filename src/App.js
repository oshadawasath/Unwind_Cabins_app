import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Experience from './pages/Experience';
import FindAvailableCabins from './pages/FindAvailableCabins';
import VideoPage from './pages/VideoPage';
import InspirationPage from './pages/InspirationPage';
import HomePage from './pages/HomePage';
import DiscoverCabinsPage from './pages/DiscoverCabinsPage';
import QuestionPage from './pages/QuestionPage';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import SignInPage from './pages/SignInPage';
import Container from './pages/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/discover" element={<DiscoverCabinsPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/find-available-cabins" element={<FindAvailableCabins />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
