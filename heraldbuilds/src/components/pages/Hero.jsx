import React from 'react';
import './Styles/Hero.css'; 
import './Styles/base.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Welcome to Herald Builds</h1>
        <p>
          From selecting components to troubleshooting issues, we'll guide you
          through every step of building the perfect PC
        </p>
      </div>
    </section>
  );
};

export default Hero;