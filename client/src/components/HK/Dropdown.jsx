import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

class Dropdown extends Component {
  state = {};
  render() {
    let render_list;
    if (this.props.user_list)
      render_list = this.props.user_list && this.props.user_list.map();
    return { render_list };
  }
}

export default Dropdown;
