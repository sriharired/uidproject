import React, { useState } from 'react';
import './Menu.css';
import '../Section1/Section1';
import '../Section2/Section2';
import '../Section3/Section3';
import '../Section4/Section4';
import '../Section5/Section5';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <li><a href="/#introduction">Introduction</a></li>
        <li><a href='/#teammembers'>Team Members</a></li>
        <li><a href='/#projectdescription'>Project Description</a></li>
        <li><a href='/#problemstatement'>Problem Statement</a></li>
        <li><a href='/#technologies'>Technologies Used</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
