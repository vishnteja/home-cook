import React, { Component } from "react";
import "./Value.css";

class Value extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.count}</td>
        <td>Rs. {this.props.data.cost}</td>
      </tr>
    );
  }
}

export default Value;
