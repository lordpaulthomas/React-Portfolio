import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from './../../pages/Home';
import logo from './../../logo.svg';
import './style.css';

class NavBar extends Component {
  render() {
    return (

        <div id="nav">
          <Link id="tab" to="/home">
            <h1 id="name">Paul Thomas</h1>
          </Link>
          <div id="links">
            <Link id="tab1" to="/about">
              About
            </Link>

            <Link id="tab2" to="/portfolio">
              Portfolio
            </Link>

            <Link id="tab3" to="/contact">
              Contact
            </Link>
          </div>
          {/* <img style={{marginLeft: "80%"}, {display: "inline-block"}}className="col-1" id="logo" src={logo} alt="" /> */}
        </div>

    );
  }
}

export default NavBar;
