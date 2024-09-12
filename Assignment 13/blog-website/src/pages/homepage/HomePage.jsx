import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import hero from "../../assets/hero.png";
import "../../index.css";
import "../homepage/HomePage.css"

// import Button from "../../Components/Buttons/Button.jsx";
// import AboutBtn from "../../Components/Buttons/AboutBtn.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <div class="hero">
        <div class="container">
          <div class="left">
            <h1 class="h1">
              Hi, I'm <b>Julia&nbsp;Walker</b>.
              <br />
              Web Developer
            </h1>

            <p class="h3">
              Specialized in <abbr title="Accessibility">a11y</abbr>
              and Core Web Vitals
            </p>

            <div class="btn-group">
            <a href="#" class="btn btn-primary">Contact Me</a>
            <a href="#" class="btn btn-secondary">About Me</a>
          </div>
          </div>

          <div class="right">
            <div class="pattern-bg"></div>
            <div class="img-box">
              <img src={hero} alt="Julia Walker" class="hero-img" />
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;