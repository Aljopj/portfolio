// src/App.js
import React from 'react';
import Navbar from './Components/NavBar'; // Consistent casing
import Home from './Components/Home';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;


