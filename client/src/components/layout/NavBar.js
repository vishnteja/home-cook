import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    type: ""
  };
  onLogoutClick = e => {
    this.props.history.push("/");
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    let userLinks;
    let logout;
    if (this.props.auth.isAuthenticated) {
      logout = (
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      );
    } else {
      logout = <React.Fragment />;
    }
    let userType = this.props.auth.type;
    console.log("USER OBJECT");
    console.log(userType);
    if (userType) {
      switch (userType) {
        case "CUSTOMER":
          userLinks = (
            <React.Fragment>
              <NavLink to="/chome" className="NavBar-Link">
                Home
              </NavLink>
              <NavLink to="/cart" className="NavBar-Link">
                Cart
              </NavLink>
            </React.Fragment>
          );
          // this.setState({ type: "CUSTOMER" });
          break;
        case "MANAGER":
          userLinks = (
            <React.Fragment>
              <NavLink to="/chome" className="NavBar-Link">
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
          // this.setState({ type: "MANAGER" });
          break;
        case "HK":
          userLinks = (
            <React.Fragment>
              <NavLink to="/chome" className="NavBar-Link">
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
          // this.setState({ type: "HK" });
          break;
        case "DELIVERY":
          userLinks = (
            <React.Fragment>
              <NavLink
                to="/delivery"
                className="col s5 brand-logo center black-text"
              >
                Home
              </NavLink>
            </React.Fragment>
          );
          // this.setState({ type: "DELIVERY" });
          break;
        default:
          userLinks = <React.Fragment />;
        // this.setState({ type: "DEFAULT" });
      }
    } else {
      userLinks = <React.Fragment />;
    }

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "georgia"
              }}
              className="col s5 brand-logo left black-text"
            >
              HOME-KITCHEN
            </Link>
            <div className="NavBar-Wrapper">
              <div className="NavBar-Link"> {userLinks}</div>
              {logout}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavBar));
