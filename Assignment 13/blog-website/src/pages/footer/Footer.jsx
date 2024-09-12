import React from 'react'
import logo_light from "../../assets/logo-light.svg"

function Footer() {
  return (
    <>
    <footer>

<div class="container">

  <div class="wrapper">

    <a href="#" class="footer-logo">
      <img src={logo_light} alt="SimpleBlog Logo" width="150" class="logo-light" />
      {/* <img src="./assets/images/logo-dark.svg" alt="SimpleBlog Logo" width="150" class="logo-dark" /> */}
    </a>

    <p class="footer-text">
      Learn about Web accessibility, Web performance, and Database management.
    </p>

  </div>

  <div class="wrapper">

    <p class="footer-title">Quick Links</p>

    <ul>

      <li>
        <a href="#" class="footer-link">Advertise with us</a>
      </li>

      <li>
        <a href="#" class="footer-link">About Us</a>
      </li>

      <li>
        <a href="#" class="footer-link">Contact Us</a>
      </li>

    </ul>

  </div>

  <div class="wrapper">

    <p class="footer-title">Legal Stuff</p>

    <ul>

      <li>
        <a href="#" class="footer-link">Privacy Notice</a>
      </li>

      <li>
        <a href="#" class="footer-link">Cookie Policy</a>
      </li>

      <li>
        <a href="#" class="footer-link">Terms Of Use</a>
      </li>

    </ul>

  </div>

</div>

<p class="copyright">
  &copy; Copyright 2024 <a href="#">SimpleBlog</a>
</p>

</footer>
    
    
    </>
  )
}

export default Footer