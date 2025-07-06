import React from 'react';
import heroBackground from './images/backgrounds/images (2).webp';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBackground})`
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Welcome to Herald Builds</h1>
          <p>
            From selecting components to troubleshooting issues, we'll guide you
            through every step of building the perfect PC
          </p>
        </div>
        <div className="dream-build">
          <p>We help you achieve your ultimate PC-building dream</p>
          <div className="dream-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;