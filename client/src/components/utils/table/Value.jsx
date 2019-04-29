import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Value.css";

class Value extends Component {
  state = {};
  render() {
    return (
      <tr>
        <Link to={"/morders/" + this.props.data.name}>
          <td>{this.props.data.name}</td>
        </Link>
        <td>{this.props.data.gender}</td>
        <td>{this.props.data.mobile}</td>
        <td>{this.props.data.email}</td>
      </tr>
    );
  }
}

export default Value;
