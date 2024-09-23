import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/#introduction">Introduction</Link></li>
        <li><Link href='/#teammembers'>Team Members</Link></li>
        <li><Link href='/#projectdescription'>Project Description</Link></li>
        <li><Link href='/#problemstatement'>Problem Statement</Link></li>
        <li><Link href='/#technologies'>Technologies Used</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
