import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <NavLink to="/"><img src="../../public/media/PixNBBGColorMulti.png" alt="logo" width="50px" /></NavLink>
        </div>
        <ul className="navMenu">
          <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/competences" className={({ isActive }) => (isActive ? 'active' : '')}>Compétences</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
