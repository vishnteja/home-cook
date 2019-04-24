import React, { Component } from "react";
import DOrder from "./Delivery_Orders";

class Delivery extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Delivery Person</h1>
        {/* GMAPS Goes Here */}
        <DOrder />
      </React.Fragment>
    );
  }
}

export default Delivery;
