import React, { Component } from "react";
import AddItem from "./AddItem/AddItem";

class AddMenu extends Component {
  state = {
    menu: ""
  };
  render() {
    return (
      <React.Fragment>
        <AddItem />
      </React.Fragment>
    );
  }
}

export default AddMenu;
