import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Footer from './../../components/Footer'
import './style.css'
import resume from './../../images/resume.pdf'

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="about_me">
          <div className="row">
            <div className="col-12 text-center">
              <h1 id="about_title" className="fluid text-center">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-6">
            </div>
            <div className="vh-100 vw-100 ml-4 pl-4">
              <p className="jumbtron text-center bg-light" id="about_text">  
              Full Stack Developer with an extensive background in the music industry and studio engineering.  Passionate about learning new technologies, collaborating, and efficiently creating quality software.  

                </p>
                <div className="vh-100 vw-100 ml-4 pl-4">
                <p id="link_box" className="text-dark bg-light col-3">Check out my wikipedia.  <a href="https://en.wikipedia.org/wiki/Paul_Thomas_(bassist)">Go to wikipedia<i className="fa fa-paper-plane-o fa-1x" aria-hidden="true"></i>  </a>    It's pretty accurate <i className="fa fa-smile-o" aria-hidden="true"></i></p>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default About;