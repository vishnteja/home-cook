import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Dummy extends Component {
  render() {
    return (
      <React.Fragment>
        <Redirect to="/" />
      </React.Fragment>
    );
  }
}

export default Dummy;
