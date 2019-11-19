import React, { Component } from "react";
import NavBar from './../../components/NavBar'
class Contact extends Component {
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
                  <input type="name" className="form-control"
                    id="inputName" aria-describedby="nameHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control"
                    id="inputEmail" placeholder=" Enter Email" />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <input type="message" className="form-control"
                    id="inputMessage" placeholder="Enter Message" />
                </div>
                <button type="submit" className="btn btn-outline-primary"
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