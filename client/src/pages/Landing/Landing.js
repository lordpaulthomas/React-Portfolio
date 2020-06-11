import React, {Component} from 'react';
import Navbar from '../../components/NavBar';
import './style.css';
class Landing extends Component {
  state = {};

  render() {
    return (
      <div id="outside">
        <div className="landNav">
          <Navbar />
        </div>
        <div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
