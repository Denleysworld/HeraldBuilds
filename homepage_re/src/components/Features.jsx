import React from 'react';

const Features = () => {
  return (
    <section className="features container">
      <div className="feature-card">
        <h2>Build Guides</h2>
        <p>Step-by-step guides to help you build your dream PC</p>
        <a href="../Guides/guides.html" className="btn">Explore Guides</a>
      </div>
      <div className="feature-card">
        <h2>Expert Troubleshooting</h2>
        <p>Solutions to common problems</p>
        <a href="../Troubleshooting/troubleshooting.html" className="btn">
          Get Help
        </a>
      </div>
    </section>
  );
};

export default Features;