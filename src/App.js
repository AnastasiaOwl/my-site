import './App.css';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const AboutPage = lazy(()=>import('./pages/AboutPage'));
const TechPage = lazy(()=>import('./pages/TechPage'));


function App() {
  const [neonActive, setNeonActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNeonActive(true);
    }, 5000);

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 9000); 

    const transitionTimer = setTimeout(() => {
      setShowAboutPage(true);
    }, 11000);


    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
      clearTimeout(transitionTimer);
    }
  }, []);

 
  if (showAboutPage) {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to home */}
          </Routes>
        </Suspense>
      </Router>
    );
  }

  return (
    <div className={`App ${fadeOut ? 'fade-out' : ''}`}>
    <div className={`intro-image ${neonActive ? 'neon-active' : ''}`}>
      {neonActive && <div className="neon-background"></div>}
      <div className="intro-text">
        <div className="intro-text-part1"> 
          <span className="intro-letter-blinkJ">J</span>ava<span className="intro-letter-blinkS">S</span>cript
        </div>
        <div className="intro-text-part2">Developer</div>
      </div>
    </div>
  </div>
  );
}

export default App;
