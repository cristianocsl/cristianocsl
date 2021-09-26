import React, { Component } from 'react';
import './Navbar.css';
import MenuItems from './MenuItems';

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
          <i className="fab fa-react" />

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
                <a className={ item.cName } href={ item.url }>
                  {item.title}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default Navbar;
