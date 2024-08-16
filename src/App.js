import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [neonActive, setNeonActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNeonActive(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
       <div className={`intro-image ${neonActive ? 'neon-active' : ''}`}>
        <div classname='intro-text'>JavaScripte Developer</div>
       </div>
    </div>
  );
}

export default App;
