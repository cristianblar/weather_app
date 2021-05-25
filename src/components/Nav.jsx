import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import barra from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import homeLogo from "../img/icons8-home.svg";

const homeIconStyle = {
  backgroundImage: `url(${homeLogo})`,
};

function Nav({ onSearch }) {
  return (
    <div className={barra.navContainer}>
      <div className={barra.navLeft}>
        <img src={Logo} alt="Logo de Henry"></img>
        <span>Henry - Weather App</span>
      </div>
      <div className={barra.linksContainer}>
        <ul>
          <li>
            <NavLink exact to="/">
              <span style={homeIconStyle}></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{ color: "#008383", fontWeight: "500" }}
            >
              Acerca de la app...
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
