import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';  
import Benefits from './Benefits';
import Testimonials from './Testimonials';

import './Styles/base.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </div>
  );
}

export default App;