import React from "react";
import "../navbar/Navbar.css";
// import light from "../../assets/logo-dark.svg";
import dark from "../../assets/logo-light.svg";
import "../../index.css";
import { useState } from "react";

function Navbar() {

  // handle themes
  const [theme, setTheme] = useState("theme-dark");
  function handleThemeToggle() {
    const newTheme = theme === "theme-dark" ? "theme-light" : "theme-dark";

    setTheme(newTheme);

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  }

  // handle responsive navigation
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <>
      <div>
        <header>
          <div class="container">
            <nav class="navbar">
              <a href="#">
                {/* <img src={light} width="150" class="logo-light" /> */}
                <img
                  src={dark}
                  alt="SimpleBlog logo"
                  width="150"
                  class="logo-dark"
                />
              </a>

              <div class="btn-group">
                <button className={`theme-btn theme-btn-mobile ${
                    theme === "light-theme" ? "light" : "dark"
                  }`}
                  onClick={handleThemeToggle}
                  
                  
                  >
                  <ion-icon name="moon" class="moon ion-icon"></ion-icon>
                  <ion-icon name="sunny" class="sun ion-icon"></ion-icon>
                </button>

                <button class="nav-menu-btn" onClick={handleNavToggle}>
                {/* <FontAwesomeIcon icon={faBars} className="logoo1"  name="menu-outline"/> */}
                  <ion-icon name="menu-outline"></ion-icon>
                </button>
              </div>

              <div className="flex-wrapper">
                <ul class="desktop-nav">
                  <li>
                    <a href="#" class="nav-link">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#" class="nav-link">
                      About Me
                    </a>
                  </li>

                  <li>
                    <a href="#" class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>

                <button
                  className={`theme-btn theme-btn-desktop ${
                    theme === "light-theme" ? "light" : "dark"
                  }`}
                  onClick={handleThemeToggle}
                >
                  <ion-icon name="moon" class="moon"></ion-icon>
                  <ion-icon name="sunny" class="sun"></ion-icon>
                </button>
              </div>
              {/* conditional rendering */}

              <div className={`mobile-nav ${isNavOpen ? "active" : ""}`}>
                <button class="nav-close-btn" onClick={handleNavToggle}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="wrapper">
                  <p class="h3 nav-title">Main Menu</p>

                  <ul>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        About Me
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="h3 nav-title">Topics</p>

                  <ul>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Database
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Accessibility
                      </a>
                    </li>

                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Web Performance
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;