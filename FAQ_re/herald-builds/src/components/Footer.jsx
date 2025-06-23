import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/HeraldBuilds/Home/index.html">Home</a>
          <a href="/HeraldBuilds/Guides/guides.html">PC Guides</a>
          <a href="/HeraldBuilds/Troubleshooting/troubleshooting.html">Troubleshooting</a>
          <a href="/HeraldBuilds/About/about.html">About Us</a>
          <a href="/HeraldBuilds/FAQ/faq.html">FAQ</a>
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
          <div className="social-links">
            <a href="#" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" title="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Herald Builds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
