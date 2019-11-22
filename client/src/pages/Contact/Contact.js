import React, { Component } from "react";
import NavBar from './../../components/NavBar'
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
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
    
    console.log(this.state.name, this.state.email, this.state.message)
    this.setState({
      name: "",
      email: "",
      message: ""
    })
    event.preventDefault();
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row text-center pl-4">
            <div className="col-4"></div>
            <div className="col-4">
              <h1>Contact</h1>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <form >
                <div className="form-group">
                  <label>Name:</label>
                  <input type="name" onChange={this.handleNameInputChange}
                    className="form-control"
                    id="inputName" aria-describedby="nameHelp"
                    placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control" onChange={this.handleEmailInputChange}
                    id="inputEmail" placeholder=" Enter Email" />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <input type="message" className="form-control"
                    id="inputMessage" placeholder="Enter Message" onChange={this.handleMessageInputChange} />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-outline-primary"
                >Submit</button>
              </form>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact