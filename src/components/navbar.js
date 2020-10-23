import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
      <ul className="nav justify-content-center unique-color-dark py-4">
        <li className="nav-item">
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
  </nav>
);

export default Navbar;
