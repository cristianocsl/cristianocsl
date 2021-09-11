import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
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
        aria-label="Toggler navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="rigth"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i className="fas fa-tachometer-alt">
                </i>Home 
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i className="fas fa-address-book">
                </i>Sobre
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/project" exact>
                <i className="far fa-clone">
                </i>Projetos 
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i className="far fa-copy">
                </i>Contatos 
              </NavLink>
            </li>
          </ul>
        </div>

    </nav>
  );
}

export default Navbar;
