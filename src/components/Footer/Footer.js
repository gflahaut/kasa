// Footer.js
import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/LOGO2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className='logo'/>
      <p>© 2024 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
