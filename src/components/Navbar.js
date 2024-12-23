import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/suporte">Suporte</Link></li>
        <li><Link to="/pets-adotados">Pets Adotados</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
