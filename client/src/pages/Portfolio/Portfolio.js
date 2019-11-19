import React, { Component } from "react";
import NavBar from './../../components/NavBar';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row text-light">
            <h1 className="col-12 text-center">Portfolio</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="d-flex col-lg-4 mb-3 justify-content-center">
              <div className="card Shadow">
                <div className="inner">
                  <img src="https://media.giphy.com/media/7LfFXBn4we96o/giphy.gif" className="card-img-top"
                    alt="..." />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Harry Potter Trivia</h5>
                  <a href="https://lordpaulthomas.github.io/Trivia-Game-2/">Click here to go to game</a>
                </div>
              </div>
            </div>
            <div className="d-flex col-lg-4 mb-3 justify-content-center">
              <div className="card Shadow">
                <div className="inner">
                  <img src="http://giphygifs.s3.amazonaws.com/media/117Q7xzQUHm69W/giphy.gif"
                    className="card-img-top" alt="..." />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Giftastic</h5>
                  <a href="https://lordpaulthomas.github.io/GifTastic/">Click here to go GifTastic</a>
                </div>
              </div>
            </div>
            <div className="d-flex col-lg-4 mb-3 justify-content-center">
              <div className="card Shadow">
                <div className="inner">
                  <img src="https://media.giphy.com/media/RBBgQaTF4WCT6/giphy.gif" className="card-img-top"
                    alt="..." />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Train Table</h5>
                  <a href="https://lordpaulthomas.github.io/Train-Time/">Click here to go to Train
                                Table</a>
                </div>
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="d-flex col-lg-4 mb-3 justify-content-center">
                <div className="card Shadow">
                  <div className="inner">
                    <img src="https://media.giphy.com/media/QtjrwGOR53DQqgBJHz/giphy.gif" className="card-img-top"
                      alt="..." />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Liri Node App</h5>
                    <a href="https://github.com/lordpaulthomas/liri-node-app">Click here to go to LIRI
                                Node App</a>
                  </div>
                </div>
              </div>
              <div className="d-flex col-lg-4 mb-3 justify-content-center">
                <div className="card Shadow">
                  <div className="inner">
                    <img src="https://media.giphy.com/media/YmQQ7Q2SO67RitZ2rd/giphy.gif" className="card-img-top"
                      alt="..." />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">CLI Word Guess Game</h5>
                    <a href="https://github.com/lordpaulthomas/CLI-Word-Guess">Click here to go to game</a>
                  </div>
                </div>
              </div>
              <div className="d-flex col-lg-4 mb-3 justify-content-center">
                <div className="card Shadow">
                  <div className="inner">
                    <img src="https://media.giphy.com/media/LmrwrZJziYEQTZYDUq/giphy.gif" className="card-img-top"
                      alt="..." />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">BAMAZON</h5>
                    <a href="https://github.com/lordpaulthomas/BAMAZON">Click here to go to BAMAZON</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio