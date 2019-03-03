import React, { Component } from "react";
import "./Value.css";

class Value extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.gender}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.mobile}</td>
        <td>{this.props.data.email}</td>
      </tr>
    );
  }
}

export default Value;
