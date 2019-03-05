import React, { Component } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    dummy: 0
  };
  NavBarLink = () => {
    switch (this.props.type) {
      case "Manager":
        return (
          <React.Fragment>
            <Link to="/addDeli" className="NavBar-Link">
              Add DeliveryDude
            </Link>
            <Link to="/addHK" className="NavBar-Link">
              Add Home Kitchen
            </Link>
          </React.Fragment>
        );
      case "HK":
        return (
          <React.Fragment>
            <Link to="/addMenu" className="NavBar-Link">
              Add Menu
            </Link>
          </React.Fragment>
        );
      case "Customer":
        break;
      default:
        return <React.Fragment />;
    }
  };

  render() {
    return (
      <nav className="NavBar-Wrapper">
        <div>
          <h3 className="NavBar-Title">Home Kitchen</h3>
        </div>
        <div className="NavBar-Links">
          <NavLink to="/" className="NavBar-Link">
            Home
          </NavLink>
          {this.NavBarLink()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
