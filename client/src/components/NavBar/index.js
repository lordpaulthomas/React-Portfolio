import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './../../pages/Home'
import logo from './../../logo.svg'
import './style.css';

class NavBar extends Component {

  render() {
    return (
      <div id="nav">
        <ul className="nav nav-tabs">
          <Link id="tab" to="/home">
            <h1 id="name" className="ml-3 mr-3">Paul Thomas</h1>
            </Link>
          <li >
            <Link
              id="tab1"
              to="/about"
>
              About
              </Link>
          </li>
          <li >
            <Link
              id="tab2"
              to="/portfolio"
  >
              Portfolio
              </Link>
          </li>
          <li >
            <Link
              id="tab3"
              to="/contact"
>
              Contact
            </Link>

          </li>

          
          {/* <img style={{marginLeft: "80%"}, {display: "inline-block"}}className="col-1" id="logo" src={logo} alt="" /> */}


        </ul>
      </div>
    )
  }
}

export default NavBar