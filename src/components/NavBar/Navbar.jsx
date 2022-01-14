import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const { clicked } = this.state;
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <FontAwesomeIcon icon={ faLaptopCode } />
        </h1>
        <div
          className="menu-icon"
          onClick={ this.handleClick }
          aria-hidden="true"
        >
          <i className={ clicked ? 'fas fa-times' : 'fas fa-bars' } />
        </div>
        <ul className={ clicked ? 'nav-menu active' : 'nav-menu' }>
          {
            MenuItems.map((item, index) => (
              <li key={ index }>
                <Link className={ item.cName } to={ item.url }>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default Navbar;
