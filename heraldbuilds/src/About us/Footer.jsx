import { Link } from 'react-router-dom';
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
          <Link to="/">Home</Link>
          <Link to="/guides">PC Guides</Link>
          <Link to="/troubleshooting">Troubleshooting</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>
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
            <a href="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" title="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Herald Builds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;