import React, { useState } from 'react';
import './Menu.css';
import Introcuction from '../Section1/Section1';
import TeamMembers from '../Section2/Section2';
import ProejctDescription from '../Section3/Section3';
import Problemstatement from '../Section4/Section4';
import Technologies from '../Section5/Section5';

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
        <li><a href={Introcuction}>Introduction</a></li>
        <li><a href={TeamMembers}>Team Members</a></li>
        <li><a href={ProejctDescription}>Project Description</a></li>
        <li><a href={Problemstatement}>Problem Statement</a></li>
        <li><a href={Technologies}>Technologies Used</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
