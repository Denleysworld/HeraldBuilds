import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="/">Home</a>
        <a href="/guides">PC Guides</a>
        <a href="/troubleshooting">Troubleshooting</a>
        <a href="/about">About Us</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="footer-section">
        <h3>Contact Information</h3>
        <div className="contact-info">
          <address>
            Herald Builds<br />
            224, Madaraka<br />
            Nairobi, Kenya<br />
            Phone: +254 748913742<br />
            Email: supportcentre@heraldbuilds.com<br />
            Support Hours: Mon-Fri, 9AM-6PM EAT
          </address>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2025 Herald Builds. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
