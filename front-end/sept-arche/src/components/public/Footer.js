import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <h3>7ème Arche</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/votrePageFacebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-white me-3" />
              </a>
              <a href="https://twitter.com/votreCompteTwitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-white me-3" />
              </a>
              <a href="https://www.instagram.com/votreCompteInstagram" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-white me-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
