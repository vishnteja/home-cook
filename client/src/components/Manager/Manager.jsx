import React, { Component } from "react";
import axios from "axios";
// GUI components
import { GridLoader } from "react-spinners";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Manager.css";
import Search from "../utils/Search/Search";
import Value from "../utils/table/Value";

class Manager extends Component {
  state = {
    data: null,
    delivery_data: null,
    hk_data: null,
    option: 1,
    // display_data: null,
    error: ""
  };

  // Need this for getting data from database
  async componentDidMount() {
    try {
      let delivery_response = await axios("/api/delivery/");
      let hk_response = await axios("/api/hk/");
      this.setState({ delivery_data: delivery_response.data.deliveryDudes });
      this.setState({ hk_data: hk_response.data.hks });
      this.setState({ option: 1 });
      this.setState({ data: this.state.delivery_data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  searchValue = async value => {
    // Copy the array
    let list_data;
    switch (this.state.option) {
      case 1:
        list_data = [...this.state.delivery_data];
        break;
      case 2:
        list_data = [...this.state.hk_data];
        break;
      default:
        return;
    }

    if (this.state.list_data === null) this.setState({ list_data });

    let list_data_filtered = this.state.data.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (list_data_filtered.length > 0)
      this.setState({ data: list_data_filtered });

    if (value.trim() === "") this.setState({ data: list_data });
  };

  onSelectHandler = e => {
    switch (e) {
      case "1":
        // get the delivery table and store an array of values in this.state.data.deli
        this.setState({ data: this.state.delivery_data });
        this.setState({ option: 1 });
        break;
      case "2":
        // get the HK table and store an array of values in this.state.data.deli
        console.log("HK Selected");
        this.setState({ data: this.state.hk_data });
        this.setState({ option: 2 });
        break;

      default:
        break;
    }
  };

  render() {
    let values;

    if (this.state.data)
      values =
        this.state.data &&
        this.state.data.map(val => <Value key={val._id} data={{ ...val }} />);
    else
      return (
        <div className="Spinner-Wrapper">
          {" "}
          <GridLoader color={"#333"} />{" "}
        </div>
      );

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.length)
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
