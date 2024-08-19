import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Abstract</h3>
            <ul>
              <li><Link to={"/"}>Branches</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to={"/"}>Blog</Link></li>
              <li><Link to={"/"}>Help Center</Link></li>
              <li><Link to={"/"}>Release Notes</Link></li>
              <li><Link to={"/"}>Status</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><Link to={"/"}>Twitter</Link></li>
              <li><Link to={"/"}>LinkedIn</Link></li>
              <li><Link to={"/"}>Facebook</Link></li>
              <li><Link to={"/"}>Dribbble</Link></li>
              <li><Link to={"/"}>Facebook</Link></li>
              <li><Link to={"/"}>Podcast</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to={"/"}>About Us</Link></li>
              <li><Link to={"/"}>Careers</Link></li>
              <li><Link to={"/"}>Legal</Link></li>
            </ul>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li><Link to={"/"}>info@abstract.com</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">
              <img src="/abstract_logo.png" alt="Logo" /> {/* Replace with your logo image */}
            </div>
            <div className="footer-copyright">
              <p>&copy; 2022 Your Company</p>
              <p>Abstract Studio Design, Inc.</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
