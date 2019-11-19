import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends Component {

  render() {
    return (
      <div>
        <ul>
          <h1>Paul Thomas</h1>
          <li>
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
              </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={window.location.pathname === '/portfolio' ? "nav-link active" : "nav-link"}>
              Portfolio
              </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar