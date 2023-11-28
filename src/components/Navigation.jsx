import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"
import Log from "../../public/media/PixNBBGColorMulti.png";

const Navigation = () => {
  const [isActive, setIsActive] = useState("");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <NavLink to="/">
            <img
              src={Log}
              alt="logo"
              width="50px"
            />
          </NavLink>
        </div>

        <div id="sideBar" className={isActive ? "active" : ""} >
          <div className="toggleBtn" id="btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        <ul className="navMenu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
