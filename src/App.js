import './App.css';
import React, { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage';

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
    return <AboutPage />;
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
