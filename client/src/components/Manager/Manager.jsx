import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Manager.css";
import axios from "axios";
import Search from "./Search/Search";
import Value from "../utils/table/Value";
import { GridLoader } from "react-spinners";

class Manager extends Component {
  state = {
    data: {
      deli: [
        {
          id: 1,
          name: "Googler Jmaes",
          gender: "Male",
          age: 29,
          mobile: 9999988888,
          email: "jmaes@google.com"
        },
        {
          id: 2,
          name: "Samert Jmaes",
          gender: "Female",
          age: 22,
          mobile: 9999988888,
          email: "jmaes@google.com"
        },
        {
          id: 3,
          name: "Sasd Jmaes",
          gender: "Male",
          age: 12,
          mobile: 9999988888,
          email: "jmaes@google.com"
        }
      ]
    },
    allDeli: null,
    error: "",
    temp1: null,
    temp2: null
  };

  // Need this for getting data from database
  async componentDidMount() {
    try {
      const deliveryDudes = await axios("/api/delivery/");
      const hk = await axios("/api/hk/");
      this.setState({ temp1: deliveryDudes.data, temp2: hk.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
    console.log("Mounting");
  }

  searchValue = async value => {
    let allDeli = [...this.state.data.deli];
    if (this.state.allDeli === null) this.setState({ allDeli });

    let deli = this.state.data.deli.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (deli.length > 0) this.setState({ data: { deli } });
    if (value.trim() === "")
      this.setState({ data: { deli: this.state.allDeli } });
  };

  onSelectHandler = e => {
    switch (e) {
      case "1":
        // get the delivery table and store an array of values in this.state.data.deli
        this.setState({ data: this.state.temp1 });
        console.log("Deli Selected");
        break;
      case "2":
        // get the HK table and store an array of values in this.state.data.deli
        try {
          // const hk = await axios("/api/hk/");
          // this.setState({ data: hk.data });
          this.setState({ data: this.state.temp2 });
        } catch (err) {
          this.setState({ error: err.message });
        }
        console.log("HK Selected");
        break;

      default:
        break;
    }
  };

  render() {
    let values;

    if (this.state.data)
      values =
        this.state.data.deli &&
        this.state.data.deli.map(val => (
          <Value key={val.id} data={{ ...val }} />
        ));
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <GridLoader color={"#333"} />{" "}
        </div>
      );

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.deli.length)
        return <h1 className="No-Users">No Results!</h1>;

    return (
      <React.Fragment>
        <div className="Table-Wrapper">
          <h1>Results: </h1>
          <Search searchValue={this.searchValue} />
          <DropdownButton id="dropdown-item-button" title="Choose">
            <Dropdown.Item
              eventKey="1"
              onSelect={this.onSelectHandler}
              as="button"
            >
              Delivery Person
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onSelect={this.onSelectHandler}
              as="button"
            >
              Home Kitchen
            </Dropdown.Item>
          </DropdownButton>
          <table className="Table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{values}</tbody>
          </table>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Manager;
