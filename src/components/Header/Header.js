// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/LOGO.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt=""/>
      <nav>
        <Link to="/home" className="custom-link">Accueil</Link>
        <Link to="/about" className="custom-link">A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
