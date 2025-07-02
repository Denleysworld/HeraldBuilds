import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Styles/index.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        <section className="about-hero">
          <div className="container">
            <h1>About Herald Builds</h1>
            <p>Your trusted partner in PC building and troubleshooting</p>
          </div>
        </section>

        <section className="about-content container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Herald Builds, we believe that building a PC should be an exciting and rewarding experience, 
              not a frustrating one. Our mission is to provide comprehensive, easy-to-follow guides and 
              troubleshooting resources that empower both beginners and experienced builders to create 
              their dream systems.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Step-by-Step Guides</h3>
                <p>Detailed instructions for building PCs, from basic setups to advanced custom loops.</p>
              </div>
              <div className="feature-item">
                <h3>Troubleshooting Support</h3>
                <p>Comprehensive solutions for common PC problems and hardware issues.</p>
              </div>
              <div className="feature-item">
                <h3>Tool Recommendations</h3>
                <p>Curated lists of essential tools and components for successful PC builds.</p>
              </div>
              <div className="feature-item">
                <h3>Expert Tips</h3>
                <p>Professional insights and best practices from experienced PC builders.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Herald Builds was founded by a team of passionate PC enthusiasts who recognized the need 
              for clear, accessible PC building resources. We've helped thousands of builders create 
              their perfect systems, from budget builds to high-end gaming rigs.
            </p>
          </div>

          <div className="about-section">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Address</h4>
                <p>
                  Herald Builds<br />
                  224, Madaraka<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+254 748913742</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>supportcentre@heraldbuilds.com</p>
              </div>
              <div className="contact-item">
                <h4>Support Hours</h4>
                <p>Monday–Friday, 9AM–6PM EAT</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;