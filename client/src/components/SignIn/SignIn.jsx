import React, { Component } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    id: 1
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to={{ pathname: "/manager" }}>
                <button
                  onClick={() => {
                    this.props.onLog("Manager");
                  }}
                  className="btn btn-primary btn-sm"
                  id="vish"
                >
                  Manager
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to={{ pathname: "/consumer" }}>
                <button
                  className="btn btn-secondary btn-sm"
                  id="vish"
                  onClick={() => {
                    this.props.onLog("Consumer");
                  }}
                >
                  Customer
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to={{ pathname: "/hk" }}>
                <button
                  className="btn btn-danger btn-sm"
                  id="vish"
                  onClick={() => {
                    this.props.onLog("HK");
                  }}
                >
                  Home Kitchen
                </button>
              </Link>
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default SignIn;
