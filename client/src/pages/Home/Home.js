import React, { Component } from "react";

import shuffle from 'shuffle-array';
import "./style.css";
import Navbar from './../../components/NavBar';
import Footer from './../../components/Footer';
import { ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import video from "./../../ProjectData/videos/IMG_0164.MOV"
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
    br: 2,
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentDidMount() {
    this.setState({
      colors: shuffle(this.state.colors)
    });
  };


  topLeft = () => {
    if (this.state.tl + 1  === this.state.tm && this.state.tm === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl + 1) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm + 1  && this.state.tm + 1 === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr + 1 && this.state.tr + 1 === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml + 1 && this.state.ml + 1 === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml  && this.state.ml  === this.state.mm + 1 && this.state.mm + 1 === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml  && this.state.ml === this.state.mm && this.state.mm === this.state.mr + 1 && this.state.mr + 1 === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl + 1 && this.state.bl + 1 === this.state.bm && this.state.bm === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm + 1 && this.state.bm + 1 === this.state.br && this.state.br === this.state.tl) {
      this.toggle()
     }
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
    if (this.state.tl  === this.state.tm  && this.state.tm  === this.state.tr && this.state.tr === this.state.ml && this.state.ml === this.state.mm && this.state.mm === this.state.mr && this.state.mr === this.state.bl && this.state.bl === this.state.bm && this.state.bm === this.state.br + 1 && this.state.br + 1 === this.state.tl) {
      this.toggle()
     }
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

  render() {
    return (
      <div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <h4 className="text-center">You Did it! Enjoy a GC video :) </h4>
              <video width="475px" height="500px" id="home_video" controls preload="none" className="video-js vjs-default-skin">
                <source src={video} type="video/mp4" />
                <track kind="captions" src="/vtt/captions.vtt" srcLang="en" label="English"></track>
              </video>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>

        <Navbar />
        <div className="text-center" id='move_box'> <a href="https://www.goodcharlotte.com/">Click Me!!</a></div>
        <div className="container pb-4 pt-4">
      
          <div id="box" className="text-center">
            <h1>Hello my name is Paul Thomas</h1>
            <h3>Thanks for coming to my website!</h3>
            <h3>Try to solve one of my favorite puzzles</h3> 
          </div>
          <div className="container pt-4 mt-4">
            <div className="row d-flex justify-content-center" >
              <div id="" onClick={this.topLeft} style={{ height: '100px', width: "100px", border: "black 1px solid", backgroundColor: `${this.state.colors[this.state.tl]}` }}></div>
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
        <div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;