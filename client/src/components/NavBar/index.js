import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg'
import './style.css';

class NavBar extends Component {

  render() {
    return (
      <div id="nav" className="bg-dark pt-3 pb-3">
        <ul className="nav nav-tabs">
          <Link
            id="header"
            to="/home"
          >
            <h1 id="name" className="ml-3 mr-3">Paul Thomas</h1>
          </Link>


          <li className="nav-item">
            <Link
              id="tab"
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
              </Link>
          </li>
          <li className="nav-item">
            <Link
              id="tab"
              to="/portfolio"
              className={window.location.pathname === '/portfolio' ? "nav-link active" : "nav-link"}>
              Portfolio
              </Link>
          </li>
          <li className="nav-item">
            <Link
              id="tab"
              to="/contact"
              className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>

          </li>

          <span className="col-5"></span>
          <img className="col-1" id="logo" src={logo} alt="" />


        </ul>
      </div>
    )
  }
}

export default NavBar