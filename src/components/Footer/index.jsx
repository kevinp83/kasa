import React from "react";
import './footer.css';
import logo from '../../assets/img/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;