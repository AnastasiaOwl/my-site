import './styles/App.css';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const AboutPage = lazy(()=>import('./pages/AboutPage'));
const TechPage = lazy(()=>import('./pages/TechPage'));
const ProjectsPage = lazy(()=> import('./pages/ProjectsPage'));


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
         <Suspense fallback={<div className="suspense-fallback fade-in"></div>}>
          <Routes>
            <Route path="/" element={<div className="fade-in"><AboutPage /></div>} />
            <Route path="/tech" element={<div className="fade-in"><TechPage /></div>} />
            <Route path="/projects" element={<div className="fade-in"><ProjectsPage/></div>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }

  return (
    <div class="landscape-content">
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
    <div class="portrait-message">
     Please rotate your device to landscape mode for the best experience.
    </div>
  </div>
  );
}

export default App;
