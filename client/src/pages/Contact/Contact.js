import React, { Component } from "react";
import { ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import NavBar from './../../components/NavBar';
import API from './../../utils/API';
import Footer from './../../components/Footer';
import giph from './../../ProjectData/videos/IMG_0105.MP4';
import './../About/style.css'
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }


  handleNameInputChange = event => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  }
  handleEmailInputChange = event => {
    const { value } = event.target;
    this.setState({
      email: value
    });
  }
  handleMessageInputChange = event => {
    const { value } = event.target;
    this.setState({
      message: value
    });
  }

  handleSubmit = event => {
    this.saveContact(this.state.name, this.state.email, this.state.message)
    this.setState({
      name: "",
      email: "",
      message: ""
    })
    this.toggle()
    event.preventDefault();
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
  }

  saveContact = (name, email, message) => {
    const contact = {
      name,
      email,
      message
    }

    API.saveContact(contact)
      .then(res => {
        console.log("Saved")
      })
      .catch(err => console.log(err))

  }


  render() {
    return (
      <div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <h4 className="text-center">Thanks I'll be in touch soon! </h4>
              <video width="475px" height="500px" id="home_video" controls preload="none" className="video-js vjs-default-skin">
                <source src={giph} type="video/mp4" />
                <track kind="captions" src="/vtt/captions.vtt" srcLang="en" label="English"></track>
              </video>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>

        <NavBar />
        <div style={{ backgroundImage: `linear-gradient(60deg, #abecd6 0%, #fbed96 100%)`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' }}>
          <div>
            <div className="row text-center pl-4">
              <div className="col-4"></div>
              <div className="col-4">

              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <div>
              </div>
              <div className="text-center" style={{ color: 'black', padding: "30px", margin: "auto" }}>
                <h5 id="contact" className="text-dark">Email me at <span style={{ color: 'red' }}> traitorpt@gmail.com </span> <br /> Or leave your contact info below.</h5>
                <form>
                  <div className="form-group">
                    <label >Name:</label>
                    <input type="name" onChange={this.handleNameInputChange}
                      className="form-control"
                      id="inputName" aria-describedby="nameHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={this.handleEmailInputChange}
                      id="inputEmail" />
                  </div>
                  <div className="form-group">
                    <label >Message:</label>
                    <input type="message" className="form-control"
                      id="inputMessage" onChange={this.handleMessageInputChange} />
                  </div>
                  <button onClick={this.handleSubmit} type="submit" className="btn btn-outline-dark btn-lg"
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center" target="_blank" id='move_box'> <a target="_blank" rel="noopener noreferrer" href="https://www.goodcharlotte.com/pages/about">Click Me!!</a></div>

        </div>
        <Footer />

      </div>

    )
  }
}

export default Contact