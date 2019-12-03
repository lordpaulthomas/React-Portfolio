import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Footer from './../../components/Footer'
import './style.css'

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
            <div className="col-sm-9 col-lg-4">
            </div>
            <div className="vh-100">
              <p className="text-dark bg-light col-8 pt-2 mt-5 ml-5" id="about_text">
                Experienced bassist and music composer with a demonstrated history of working in the entertainment industry for over 20 years.  A passion for math and computer science led to a desire to learn web development.  Combining years of studio engineering experience and the ability to learn new software quickly, a new creative skill set was born.   Proficient in many technologies such as JavaScript, HTML , CSS, SQL, MongoDb, Express, React, Node, Python and Django.   Very efficient team player that codes with user empathy and takes pride in making quality software.
                </p>
              <p className="text-dark bg-light col-3 pt-2 ml-5">Check out my wikipedia.  <a href="https://en.wikipedia.org/wiki/Paul_Thomas_(bassist)">Go to wikipedia<i className="fa fa-paper-plane-o fa-1x" aria-hidden="true"></i>  </a>    It's pretty accurate <i className="fa fa-smile-o" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
};

export default About;