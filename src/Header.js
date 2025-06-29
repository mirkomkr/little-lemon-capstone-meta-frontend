import React from 'react';
import Nav from './Nav';
import logo from '../src/assets/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <Link to="/">
        <img src={logo} alt="Little Lemon Restaurant Logo" className="logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
