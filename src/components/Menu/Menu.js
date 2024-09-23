import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust the offset to your needs (e.g., header height)
        behavior: 'smooth',
      });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>UID</h2>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="/#introduction"
            onClick={(e) => smoothScroll(e, 'introduction')}
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link to="/#teammembers" onClick={(e) => smoothScroll(e, 'teammembers')}>
            Team Members
          </Link>
        </li>
        <li>
          <Link to="/#projectdescription" onClick={(e) => smoothScroll(e, 'projectdescription')}>
            Project Description
          </Link>
        </li>
        <li>
          <Link to="/#problemstatement" onClick={(e) => smoothScroll(e, 'problemstatement')}>
            Problem Statement
          </Link>
        </li>
        <li>
          <Link to="/#technologies" onClick={(e) => smoothScroll(e, 'technologies')}>
            Technologies Used
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
