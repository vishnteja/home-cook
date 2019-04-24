import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    dummy: 0
  };
  NavBarLink = () => {
    switch (this.props.type) {
      case 1:
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
      case 3:
        return (
          <React.Fragment>
            <NavLink to="/hk" className="NavBar-Link">
              Home
            </NavLink>
            <NavLink to="/addMenu" className="NavBar-Link">
              Add Menu Item
            </NavLink>
            <NavLink to="/hkorders" className="NavBar-Link">
              Orders
            </NavLink>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <NavLink to="/consumer" className="NavBar-Link">
              Home
            </NavLink>
            <NavLink to="/cart" className="NavBar-Link">
              Cart
            </NavLink>
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <NavLink to="/delivery" className="NavBar-Link">
              Home
            </NavLink>
          </React.Fragment>
        );
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
