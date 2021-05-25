import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../img/WeatherLogo.png';
import SearchBar from './SearchBar';
import barra from './Nav.module.css';
import homeLogo from '../img/icons8-home.svg';

const homeIconStyle = {
  backgroundImage: `url(${homeLogo})`,
};

function Nav({ onSearch }) {
  return (
    <div className={barra.navContainer}>
      <div className={barra.navLeft}>
        <img src={Logo} alt="Logo de Henry" width={40} height={40} />
        <span>Weather App</span>
      </div>
      <div className={barra.linksContainer}>
        <ul>
          <li>
            <NavLink exact to="/">
              <span style={homeIconStyle} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{ color: '#008383', fontWeight: '500' }}
            >
              About the app...
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={barra.navRight}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
