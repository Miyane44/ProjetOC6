import React from 'react';
import { NavLink } from 'react-router-dom';

import logoHeader from '../../src/assets/logo-header.svg';

import "../styles/components/page-header.scss"

function PageHeader() {
    return (
        <header className="page-header">
          <div className='logo'>
            <NavLink to="/">
              <img src={logoHeader} className="header-logo" alt="logo" />
            </NavLink>
          </div>
          <div>
            <ul className='nav-links'>
                <li>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}
                    >
                    Accueil
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}
                    >
                    À propos
                </NavLink>
                </li>
            </ul>
          </div>
        </header>
    );
}

export default PageHeader;