import React, { Component } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import iconManager from "../../icons/economy.png";
import iconDish from "../../icons/dish.png";
import iconWhisk from "../../icons/whisk.png";

class SignIn extends Component {
  state = {
    id: 1
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row" id="row-buttons">
            <div className="col">
              <Link to={{ pathname: "/manager" }}>
                <div
                  onClick={() => {
                    this.props.onLog("Manager");
                  }}
                  className="btn btn-primary btn-sm"
                  id="vishnu"
                >
                  <img class="profile" src={iconManager} alt="" />
                  <h3>Manager</h3>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to={{ pathname: "/consumer" }}>
                <div
                  onClick={() => {
                    this.props.onLog("Consumer");
                  }}
                  className="btn btn-primary btn-sm"
                  id="vishnu"
                >
                  <img class="profile" src={iconDish} alt="" />
                  <h3>Consumer</h3>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to={{ pathname: "/hk" }}>
                <div
                  onClick={() => {
                    this.props.onLog("HK");
                  }}
                  className="btn btn-primary btn-sm"
                  id="vishnu"
                >
                  <img class="profile" src={iconWhisk} alt="" />
                  <h3>Home Kitchen</h3>
                </div>
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
