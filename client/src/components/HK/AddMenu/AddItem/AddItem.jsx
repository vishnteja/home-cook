import React, { Component } from "react";
import axios from "axios";

class AddItem extends Component {
  state = {
    hkname: "",
    name: "",
    cost: "",
    count: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlerSubmit = async e => {
    e.preventDefault();
    // Update Database from here
    try {
      const newMenu = await axios.post("/api/menu/", {
        hkname: this.refs.hkname.value,
        name: this.refs.name.value,
        cost: Number(this.refs.cost.value),
        count: Number(this.refs.count.value)
      });
      this.setState({
        response: `Menu item ${newMenu.data.newMenu.name} created!`
      });
    } catch (err) {
      this.setState({ response: err.message });
    }
    console.log("Successfully added");
  };

  render() {
    return (
      <div className="container">
        <div className="AddUser-Wrapper">
          <div className="title">Add Delivery Person:</div>
          <form onSubmit={this.handlerSubmit}>
            <label htmlFor="hkname">Home Name:</label>
            <input
              type="text"
              placeholder="For example: Rajiv Ipsoo"
              name="hkname"
              onChange={this.onChangeHandler}
              ref="hkname"
              className="Add-User-Input"
              required
              minLength="3"
              maxLength="33"
              id="hkname"
            />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="For example: Rajiv Ipsoo"
              name="name"
              onChange={this.onChangeHandler}
              ref="name"
              className="Add-User-Input"
              required
              minLength="3"
              maxLength="33"
              id="name"
            />

            <label htmlFor="count">Count: </label>
            <input
              type="number"
              placeholder="0 to 20"
              name="count"
              min="0"
              max="20"
              onChange={this.onChangeHandler}
              ref="count"
              className="Add-User-Input"
              required
              id="count"
            />
            <label htmlFor="cost">Cost: </label>
            <input
              type="number"
              placeholder="10 - 200"
              name="cost"
              min="10"
              max="200"
              onChange={this.onChangeHandler}
              ref="cost"
              className="Add-User-Input"
              required
              id="cost"
            />
            <div className="container-btn">
              <button type="submit" className="Add-User-Submit">
                Submit
              </button>
              <button type="reset" className="Add-User-Reset">
                Reset
              </button>
            </div>
          </form>
          <p>{this.state.response}</p>
        </div>
      </div>
    );
  }
}

export default AddItem;
