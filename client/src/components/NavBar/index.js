import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends Component {

  render() {
    return (
      <div id="nav" className="bg-info">
        <ul className ="nav nav-tabs">
          <h1 className="ml-3 mr-3 text-dark">Paul Thomas</h1>
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
              </Link>
          </li>
          <li className="nav-item"> 
            <Link
              to="/portfolio"
              className={window.location.pathname === '/portfolio' ? "nav-link active" : "nav-link"}>
              Portfolio
              </Link>
          </li>
          <li className="nav-item">
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