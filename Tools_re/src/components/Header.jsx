import React from 'react';
import logo from '../assets/images/Logo/Heraldbuilds logo.png';

const Header = () => (
  <header>
    <div className="site-title">
      <img src={logo} alt="Herald Builds Logo" className="site-logo" />
      <span>Herald Builds</span>
    </div>
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/troubleshooting">Troubleshooting</a>
      <a href="/guides">PC Guides</a>
      <a href="/tools">Tools</a>
      <a href="/about">About Us</a>
      <a href="/faq">FAQ</a>
    </nav>
  </header>
);

export default Header;