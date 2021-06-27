import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Connect from '../Connect/Connect';

function App() {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <div className="app">
      <Nav />
      <Landing
        windowWidth={windowWidth}
      />
      <About />
      <Skills
        windowWidth={windowWidth}
      />
      <Projects
        windowWidth={windowWidth}
      />
      <Connect
        windowWidth={windowWidth}
      />
    </div>
  );
}

export default App;
