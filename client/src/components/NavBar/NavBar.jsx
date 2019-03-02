import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar-Wrapper">
      <div>
        <h3 className="NavBar-Title">Home Cook</h3>
      </div>
      <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link">
          Home
        </Link>
        <Link to="/addDeli" className="NavBar-Link">
          Add DeliveryDude
        </Link>
        <Link to="/addHK" className="NavBar-Link">
          Add Home Kitchen
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
