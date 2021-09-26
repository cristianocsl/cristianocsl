import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    <NavLink className="navbar-brand navbar-logo" to="/" exact>
      Web Solutions
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-label="Toggler navigation"
    >
      <i className="fas fa-bars text-white" />
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav ml-auto">
        <div className="hori-selector">
          <div className="left" />
          <div className="rigth" />
        </div>

        <li className="nav-item active">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about" exact>
            Sobre
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/project" exact>
            Projetos
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" exact>
            Contatos
          </NavLink>
        </li>
      </ul>
    </div>

  </nav>
);

export default Navbar;
