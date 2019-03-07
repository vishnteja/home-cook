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
            <NavLink to="/manager" className="NavBar-Link">
              Home
            </NavLink>
            <NavLink to="/addDeli" className="NavBar-Link">
              Add Delivery Personnel
            </NavLink>
            <NavLink to="/addHK" className="NavBar-Link">
              Add Home Kitchen
            </NavLink>
          </React.Fragment>
        );
      case "HK":
        return (
          <React.Fragment>
            <NavLink to="/hk" className="NavBar-Link">
              Home
            </NavLink>
            <NavLink to="/addMenu" className="NavBar-Link">
              Add Menu Item
            </NavLink>
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
          <NavLink to="/" className="NavBar-Link">
            <h3 className="NavBar-Title">Home Kitchen</h3>
          </NavLink>
        </div>
        <div className="NavBar-Links">{this.NavBarLink()}</div>
      </nav>
    );
  }
}

export default NavBar;
