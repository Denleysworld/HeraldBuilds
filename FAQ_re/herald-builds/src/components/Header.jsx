import React from 'react';
import '../styles/global.css';

const Header = () => (
  <header>
    <div className="site-title">
      <img 
        src="../Images/Logo/Heraldbuilds logo.png" 
        alt="Herald Builds Logo" 
        className="site-logo" 
      />
      <span>Herald Builds</span>
    </div>
    <nav className="nav-links">
      <a href="../Home/index.html">Home</a>
      <a href="../Troubleshooting/troubleshooting.html">Troubleshooting</a>
      <a href="../Guides/guides.html">PC Guides</a>
      <a href="../Tools/tools.html">Tools</a>
      <a href="../About/about.html">About Us</a>
      <a href="../FAQ/faq.html">FAQ</a>
    </nav>
  </header>
);

export default Header;
