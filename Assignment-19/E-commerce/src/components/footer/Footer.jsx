import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <p>Home</p>
            <p>Shop</p>
            <p>FAQs</p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="#!" className="social-icon">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#!" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#!" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#!" className="social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
