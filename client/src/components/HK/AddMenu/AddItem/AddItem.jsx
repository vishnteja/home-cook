import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    cost: "",
    count: "",
    img: "https:picsum.photos/150/1000"
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlerSubmit = async e => {
    e.preventDefault();
    // Update Database from here
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="AddUser-Wrapper">
          <h1>Add Food Item: </h1>
          <form onSubmit={this.handlerSubmit}>
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
            <button type="submit" className="Add-User-Submit">
              Submit
            </button>
            <button type="reset" className="Add-User-Reset">
              Reset
            </button>
          </form>
          <img src={this.state.img} alt="" />
        </div>
      </div>
    );
  }
}

export default AddItem;
