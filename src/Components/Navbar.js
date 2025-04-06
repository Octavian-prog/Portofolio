import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/counter" onClick={closeMenu}>Counter</Link>
        </li>
        <li>
          <Link to="/calculator" onClick={closeMenu}>Calculator</Link>
        </li>
        <li>
          <Link to="/todo" onClick={closeMenu}>To-Do List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
