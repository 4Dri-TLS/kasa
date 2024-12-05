import React from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";
import "../Mobile.scss";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__nav-link is-active" : "header__nav-link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/info"
              className={({ isActive }) =>
                isActive ? "header__nav-link is-active" : "header__nav-link"
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;