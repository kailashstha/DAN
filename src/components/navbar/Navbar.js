import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../icons/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <ul className="navItems">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Services">
          <li>Services</li>
        </Link>
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div class="animation start-home"></div>
    </nav>
  );
}

export default Navbar;
