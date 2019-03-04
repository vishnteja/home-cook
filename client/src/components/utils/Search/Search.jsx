import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  onKeyPressHandler = e => {
    if (e.key === "Enter") {
      this.setState({ value: this.state.value }, () => {
        this.props.searchValue(this.state.value);
      });
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search ..."
        name="name"
        onChange={this.onChangeHandler}
        onKeyPress={this.onKeyPressHandler}
        className="Search-User-Input"
      />
    );
  }
}

export default Search;
