import React, { Component } from "react";
import axios from "axios";
// GUI components
import { GridLoader } from "react-spinners";
// import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Consumer.css";
import Search from "../utils/Search/Search";
import Value from "../utils/table/Food_hk";

class Consumer extends Component {
  state = {
    data: null,
    food_data: null,
    // display_data: null,
    error: ""
  };

  // Need this for getting data from database
  async componentDidMount() {
    try {
      let food_resp = await axios("/api/menu/");
      this.setState({ food_data: food_resp.data.menus });
      this.setState({ data: this.state.food_data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  searchValue = async value => {
    // Copy the array
    let list_data = [...this.state.food_data];
    if (this.state.list_data === null) this.setState({ list_data });

    let list_data_filtered = this.state.data.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (list_data_filtered.length > 0)
      this.setState({ data: list_data_filtered });

    if (value.trim() === "") this.setState({ data: list_data });
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
          <table className="Table">
            <thead>
              <tr>
                <th>HK Name</th>
                <th>Item Name</th>
                <th>Count</th>
                <th>Cost</th>
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

export default Consumer;
