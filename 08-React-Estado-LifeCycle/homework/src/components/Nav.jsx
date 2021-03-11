import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import barra from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={barra.navContainer}>
      <div className={barra.navLeft}>
        <img src={Logo}></img>
        <span>Henry - Weather App</span>
      </div>
      <div className={barra.navRight}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
