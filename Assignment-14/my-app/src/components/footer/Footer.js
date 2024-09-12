import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Hafiz Artaza<span className="logo-dot"></span></h1>
          <p>I am a frontend developer from USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className="footer-subscribe">
          <div className="input-group">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Alex Bennett. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Term of Services</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Connect with me</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
