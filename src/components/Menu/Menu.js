import React, { useState } from 'react';
import './Menu.css'; 

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
        <li><a href="#home">Introduction</a></li>
        <li><a href="#services">Team Members</a></li>
        <li><a href="#about">Project Description</a></li>
        <li><a href="#contact">Problem Statement</a></li>
        <li><a href="#contact">Technologies Used</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
