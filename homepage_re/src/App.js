import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DreamSection from './components/DreamSection';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <DreamSection />
      <Features />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;