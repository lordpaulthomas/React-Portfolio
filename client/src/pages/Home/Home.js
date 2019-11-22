import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./../About";
import shuffle from 'shuffle-array'
import "./style.css"
import Navbar from './../../components/NavBar'
class Home extends Component {

  state = {
    colors: ["white", "green", "red", "orange", "blue", "yellow"],
    tl: 0,
    tm: 1,
    tr: 2,
    ml: 3,
    mm: 4,
    mr: 5,
    bl: 0,
    bm: 1,
    br: 2
  };

  componentDidMount() {
    this.setState({
      colors: shuffle(this.state.colors)
    });
  };


  topLeft = () => {
    if (this.state.tl === 5) {
      this.setState({
        tl: 0
      })
    } else {
      this.setState({
        tl: this.state.tl + 1
      });
    }

  };
  topMiddle = () => {
    if (this.state.tm === 5) {
      this.setState({
        tm: 0
      })
    } else {
      this.setState({
        tm: this.state.tm + 1
      });
    }
  };
  topRight = () => {
    if (this.state.tr === 5) {
      this.setState({
        tr: 0
      })
    } else {
      this.setState({
        tr: this.state.tr + 1
      });
    }
  };

  leftMiddle = () => {
    if (this.state.ml === 5) {
      this.setState({
        ml: 0
      })
    } else {
      this.setState({
        ml: this.state.ml + 1
      });
    }
  };

  middleMiddle = () => {
    if (this.state.mm === 5) {
      this.setState({
        mm: 0
      })
    } else {
      this.setState({
        mm: this.state.mm + 1
      });
    }
  };

  rightMiddle = () => {
    if (this.state.mr === 5) {
      this.setState({
        mr: 0
      })
    } else {
      this.setState({
        mr: this.state.mr + 1
      });
    }
  };

  lowerLeft = () => {
    if (this.state.bl === 5) {
      this.setState({
        bl: 0
      })
    } else {
      this.setState({
        bl: this.state.bl + 1
      });
    }
  };

  lowerMiddle = () => {
    if (this.state.bm === 5) {
      this.setState({
        bm: 0
      })
    } else {
      this.setState({
        bm: this.state.bm + 1
      });
    }
  };

  lowerRight = () => {
    if (this.state.br === 5) {
      this.setState({
        br: 0
      })
    } else {
      this.setState({
        br: this.state.br + 1
      });
    }
  };

  checkForWin() {
    if (this.state.tl === this.state.tm && this.state.tm === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br) {
      alert("you got it 0")
      return (
        <Router>
          <Route exact path="/about" goto="/about" component={About} />
        </Router>
      )

    }
  }

  render() {

    return (

      <div>
        <Navbar />
        <div className="container pb-4 pt-4">
          <div id="box" className="text-center">
            <h1>Hello my name is Paul Thomas</h1>
            <h3>Thanks for coming to my website!</h3>
            <h3>You must first solve this puzzle to enter</h3>
          </div>
          <div className="container pt-4 mt-4">
            {this.checkForWin()}
            <div className="row d-flex justify-content-center" >
              <div onClick={this.topLeft} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.tl]}` }}></div>
              <div onClick={this.topMiddle} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.tm]}` }}></div>
              <div onClick={this.topRight} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.tr]}` }}></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div onClick={this.leftMiddle} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.ml]}` }}></div>
              <div onClick={this.middleMiddle} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.mm]}` }}></div>
              <div onClick={this.rightMiddle} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.mr]}` }}></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div onClick={this.lowerLeft} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.bl]}` }}></div>
              <div onClick={this.lowerMiddle} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.bm]}` }}></div>
              <div onClick={this.lowerRight} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.br]}` }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;