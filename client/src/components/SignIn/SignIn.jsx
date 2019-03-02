import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    id: 1
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn btn-primary btn-sm" id="vish">
                Manager
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary btn-sm" id="vish">
                Customer
              </button>
            </div>
            <div className="col">
              <button className="btn btn-danger btn-sm" id="vish">
                Home Kitchen
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
