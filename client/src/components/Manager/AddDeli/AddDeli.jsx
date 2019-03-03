import React, { Component } from "react";
import "./AddDeli.css";
import axios from "axios";

class AddDeli extends Component {
  state = {
    id: 0,
    name: "",
    gender: "",
    age: "",
    mobile: "",
    email: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlerSubmit = async event => {
    event.preventDefault();
    // Update Database from here
    try {
      const newDeliveryDude = await axios.post("/api/delivery/", {
        name: this.refs.name.value,
        age: Number(this.refs.age.value),
        gender: this.refs.gender.value,
        mobile: Number(this.refs.mobile.value),
        email: this.refs.email.value
      });
      this.setState({
        response: `User ${newDeliveryDude.data.newDeliveryDude.name} created!`
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
          <h1>Add Delivery Person:</h1>
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
            <label htmlFor="gender">
              Gender: <b>(must be Male or Female)</b>
            </label>
            <input
              type="text"
              placeholder="Male or Female"
              name="gender"
              onChange={this.onChangeHandler}
              ref="gender"
              className="Add-User-Input"
              required
              minLength="3"
              maxLength="6"
              id="gender"
            />
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              placeholder="0 to 120"
              name="age"
              min="1"
              max="120"
              onChange={this.onChangeHandler}
              ref="age"
              className="Add-User-Input"
              required
              id="age"
            />
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              placeholder="ipsoo.raj@nik.com"
              name="email"
              minLength="5"
              maxLength="120"
              onChange={this.onChangeHandler}
              ref="email"
              className="Add-User-Input"
              required
              id="email"
            />
            <label htmlFor="mobile">Mobile Number: </label>
            <input
              type="number"
              placeholder="9xxxxxxxxx"
              name="mobile"
              min="1000000000"
              max="9999999999"
              onChange={this.onChangeHandler}
              ref="mobile"
              className="Add-User-Input"
              required
              id="mobile"
            />
            <button type="submit" className="Add-User-Submit">
              Submit
            </button>
            <button type="reset" className="Add-User-Reset">
              Reset
            </button>
          </form>
          <p>{this.state.response}</p>
        </div>
      </div>
    );
  }
}

export default AddDeli;
