import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>

    <NavLink to="/contacts" exact className="link" activeClassName="activeLink">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
