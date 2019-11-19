import React, { Component } from "react";
import NavBar from './../../components/NavBar';
import './style.css'
class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="about_me">
          <div className="row">
            <div className="col-12 text-center">
              <h1 id="about_title" className="fluid text-center" >About Me</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-9 col-lg-4">
            </div>
            <div className="vh-100">
              <p className="text-dark bg-light col-8 pt-2 mt-5 ml-5" id="about_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quasi non sint voluptate ea eos alias
                  accusamus suscipit quo vitae fuga deserunt doloribus, sunt aspernatur impedit officiis. Minima, ab
                  quasi!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum blanditiis repudiandae
                  sapiente consequatur explicabo eaque beatae, eum omnis esse sed necessitatibus, laborum magnam
                  laboriosam alias amet? Tempore, minima quia!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda obcaecati non, ducimus sint enim
                  quis iusto ex esse maiores deserunt suscipit ratione quod nesciunt illo quas ipsa similique porro
                  quasi?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum nostrum voluptatem
                  recusandae inventore aliquid a, fugit laborum qui quae, et maiores, blanditiis quis doloribus amet
                  iure at sunt nobis.
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;